import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="./week-2">Week 2</Link>
        </li>
        <li>
          <Link href="./week-3">Week 3</Link>
        </li>
        <li>
          <Link href="./week-4">Week 4</Link>
        </li>
      </ul>
    </main>
  );
}
