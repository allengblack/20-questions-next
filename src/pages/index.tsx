import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>20 Questions Next App</title>
        <meta
          name="description"
          content="Solving Mykeel's 20 Questions problem with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-bold text-xl">20 Questions</h1>

        <p>
          Welcome! This project attempts to solve the 20 Questions challenge by{" "}
          <Link
            className="text-blue-600"
            href="https://github.com/mykeels"
            target="_blank"
          >
            Mykeels
          </Link>{" "}
          using Next.js.
        </p>

        <p>
          You can read more about the 20 Questions project{" "}
          <Link
            className="text-blue-600"
            href="https://github.com/mykeels/20-questions"
          >
            here
          </Link>
          .
        </p>

        <p className="leading-10">
          Solutions to each of the questions are below:
        </p>

        <div className="pl-5">
          <ul className="list-decimal">
            <li>
              <Link className="text-blue-600" href="/name-concatenation">
                Name Concatenation
              </Link>
            </li>

            <li>
              <Link className="text-blue-600" href="/lottery">
                Lottery
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
