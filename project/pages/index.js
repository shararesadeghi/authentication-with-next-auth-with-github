import { signIn,signOut } from "next-auth/react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {
  const signinHandler = () => {
    signIn("github");
  };

  const signoutHandler = () => {
    signOut();
  };
  return (
    <div className={styles.container}>
      <h1>Next-Auth|Github</h1>
      <button onClick={signinHandler}>Signin</button>
      <button onClick={signoutHandler}>Signout</button>
      <button><Link href="/dashboard">Dashboard</Link></button>
      <button><Link href="/ssrdashboard">SSR Dashboard</Link></button>
    </div>
  );
}
