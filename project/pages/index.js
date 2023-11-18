import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { status } = useSession();
  const signinHandler = () => {
    signIn("github");
  };

  const signoutHandler = () => {
    signOut();
  };
  return (
    <div className={styles.container}>
      <h1>Next-Auth|Github</h1>
      {status === "unauthenticated" ? (
        <button onClick={signinHandler}>Signin</button>
      ) : null}
      {status === "authenticated" ? (
        <>
          <button onClick={signoutHandler}>Signout</button>
          <button>
            <Link href="/dashboard">Dashboard</Link>
          </button>
          <button>
            <Link href="/ssrdashboard">SSR Dashboard</Link>
          </button>
        </>
      ) : null}
    </div>
  );
}
