'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  
  useEffect(() => {
    redirect("/auth/login");
  }, []);

  return (
    <main>
      
    </main>
  );
}
