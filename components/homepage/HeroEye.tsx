"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mesh, Program, Renderer, Texture, Triangle } from "ogl";

const EYE_SRC = "/brand/logo-eye.webp";

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Les flammes partent de l'image elle-même : chaque pixel regarde vers le bas
// et s'allume s'il trouve une zone lumineuse du logo sous lui.
const fragment = `
precision highp float;
uniform sampler2D tMap;
uniform float uTime;
uniform float uEnergy;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + 17.0;
    a *= 0.5;
  }
  return v;
}

float emit(vec2 p) {
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) return 0.0;
  vec4 t = texture2D(tMap, p);
  return t.a * t.b;
}

void main() {
  // Le canvas déborde de l'image : 45 % de chaque côté, 18 % en haut, 8 % en bas.
  vec2 uv = vec2(vUv.x * 1.9 - 0.45, vUv.y * 1.26 - 0.08);
  float lick = fbm(vec2(uv.x * 7.0, uv.y * 4.5 - uTime * 1.5));
  float acc = 0.0;

  for (int i = 1; i <= 14; i++) {
    float f = float(i) / 14.0;
    vec2 q = uv;
    q.y -= f * f * 0.2 * (0.75 + uEnergy * 0.45);
    float sway = fbm(vec2(q.x * 5.0 + f * 1.7, q.y * 3.5 - uTime * 0.85));
    q.x += (sway - 0.5) * 0.3 * f;
    acc += emit(q) * (1.0 - f) * smoothstep(0.2 + f * 0.45, 0.85, lick + (1.0 - f) * 0.45);
  }

  acc = acc / 14.0 * (2.6 + uEnergy * 0.9);
  vec3 col = mix(vec3(0.02, 0.14, 0.9), vec3(0.1, 0.72, 1.0), smoothstep(0.0, 0.5, acc));
  col = mix(col, vec3(0.86, 0.97, 1.0), smoothstep(0.6, 1.2, acc));
  float alpha = clamp(acc, 0.0, 1.0);
  gl_FragColor = vec4(col * alpha, alpha);
}
`;

export const HeroEye = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        const canvas = canvasRef.current;
        if (!root || !canvas) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let renderer: Renderer | null = null;
        let program: Program | null = null;
        let mesh: Mesh | null = null;

        try {
            renderer = new Renderer({ canvas, alpha: true, premultipliedAlpha: true, dpr: Math.min(window.devicePixelRatio, 1.5) });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            const texture = new Texture(gl, {
                generateMipmaps: false,
                wrapS: gl.CLAMP_TO_EDGE,
                wrapT: gl.CLAMP_TO_EDGE,
                minFilter: gl.LINEAR,
            });
            const source = new window.Image();
            source.onload = () => {
                texture.image = source;
                root.dataset.flames = "on";
            };
            source.src = EYE_SRC;
            program = new Program(gl, {
                vertex,
                fragment,
                uniforms: { tMap: { value: texture }, uTime: { value: 0 }, uEnergy: { value: 0 } },
                transparent: true,
            });
            mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
        } catch {
            // Sans WebGL, l'œil suit quand même le curseur ; seules les flammes manquent.
            renderer = null;
        }

        // Mêmes débords que dans le shader : 190 % de la largeur, 126 % de la hauteur.
        const resize = () => renderer?.setSize(root.clientWidth * 1.9, root.clientHeight * 1.26);
        resize();
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(root);

        const look = { x: 0, y: 0 };
        const target = { x: 0, y: 0 };
        let energy = 0;
        let energyTarget = 0;
        let lastPointer = -Infinity;

        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType === "touch") return;
            const rect = root.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height * 0.435);
            const distance = Math.hypot(dx, dy);
            const reach = Math.min(1, distance / 420);
            target.x = distance ? (dx / distance) * reach : 0;
            target.y = distance ? (dy / distance) * reach : 0;
            energyTarget = 1 - Math.min(1, distance / 520);
            lastPointer = performance.now();
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });

        let frame = 0;
        let visible = true;
        const start = performance.now();

        const loop = (now: number) => {
            const time = (now - start) / 1000;

            // Sans curseur récent (ou au doigt), le regard se promène lentement.
            if (now - lastPointer > 2600) {
                target.x = Math.sin(time * 0.43) * 0.55 + Math.sin(time * 1.1) * 0.12;
                target.y = Math.sin(time * 0.31 + 1.3) * 0.3;
                energyTarget = 0;
            }

            look.x += (target.x - look.x) * 0.11;
            look.y += (target.y - look.y) * 0.11;
            energy += (energyTarget - energy) * 0.04;
            root.style.setProperty("--look-x", look.x.toFixed(3));
            root.style.setProperty("--look-y", look.y.toFixed(3));

            if (renderer && program && mesh) {
                program.uniforms.uTime.value = time;
                program.uniforms.uEnergy.value = energy;
                renderer.render({ scene: mesh });
            }
            frame = requestAnimationFrame(loop);
        };

        const sync = () => {
            cancelAnimationFrame(frame);
            if (visible && !document.hidden) frame = requestAnimationFrame(loop);
        };
        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            sync();
        });
        observer.observe(root);
        document.addEventListener("visibilitychange", sync);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            document.removeEventListener("visibilitychange", sync);
            window.removeEventListener("pointermove", onPointerMove);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="hero-eye" ref={rootRef} aria-hidden="true">
            <canvas className="hero-eye-flames" ref={canvasRef} />
            <div className="hero-eye-body">
                <Image className="hero-eye-art" src={EYE_SRC} alt="" width={571} height={1000} priority />
                <div className="hero-eye-socket">
                    <Image className="hero-eye-iris" src="/brand/logo-eye-iris.webp" alt="" width={408} height={408} priority />
                </div>
            </div>
        </div>
    );
};
