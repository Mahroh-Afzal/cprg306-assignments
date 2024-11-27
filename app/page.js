import Image from "next/image";
import Link from "next/link";
import NewItem from "./week-7/new_item";


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
        <li>
          <Link href="./week-5">Week 5</Link>
        </li>
        <li>
          <Link href="./week-6">Week 6</Link>
        </li>
        <li>
          <Link href="./week-7">Week 7</Link>
        </li>
        <li>
          <Link href="./week-8">Week 8</Link>
        </li>
        <li>
          <Link href="./week-8">Week 9</Link>
        </li>
        <li>
          <Link href="./week-8">Week 9</Link>
        </li>
        <li>
          <Link href="./Final_Project">Final Project</Link>
        </li>
      </ul>
    </main>
  );
}
