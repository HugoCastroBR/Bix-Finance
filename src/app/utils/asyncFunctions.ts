import { promises as fs } from "fs";
import path from "path";
import { Transaction } from "@/app/utils/types";

export async function readTransactions(): Promise<Transaction[]> {
  const filePath = path.join(process.cwd(), 'src/public/json', 'transactions.json');
  const fileBuffer = await fs.readFile(filePath);
  const transactions = JSON.parse(fileBuffer.toString()) as Transaction[];
  return transactions;
}
