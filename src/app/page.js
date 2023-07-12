import { Anton } from "next/font/google";
import QuakeList from "./components/QuakeList";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:p-10 pt-10">
      <h1 className={"text-6xl text-white " + anton.className}>Sismos Chile</h1>
      <QuakeList/>
    </main>
  );
}
