import HomePage from "@/components/HomePage";
import {ArrowUp, Badge} from "lucide-react"
export default function Home() {
  return (
    <div className="">
      <main className="">
      <Badge size={136} color="#ff0000" strokeWidth={2.75} />
      <ArrowUp />
      <HomePage />
      </main>
    </div>
  );
}
