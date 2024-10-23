'use client'
import { useEffect } from "react";
import DashBoard from "./components/pages/dashboard";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  
  useEffect(() => {
    redirect("/dashboard");
  }, []);

  return (
    <main>
      
    </main>
  );
}
