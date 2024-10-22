import { promises as fs } from "fs";
import path from "path";
import { Transaction } from "@/app/utils/types";

export async function readTransactions(): Promise<Transaction[]> {
  const filePath = path.join(process.cwd(), 'src/public/json', 'transactions.json');
  const fileBuffer = await fs.readFile(filePath);
  const transactions = JSON.parse(fileBuffer.toString()) as Transaction[];
  return transactions;
}

export function isWithinOneYear(date1: number, date2: number): boolean {
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
  const differenceInMilliseconds = Math.abs(date1 - date2);
  return differenceInMilliseconds <= oneYearInMilliseconds;
}


export function calculateTotalBalance(transactions: Transaction[]): number {
  const deposits = calculateRevenue(transactions);
  const withdrawals = calculateExpenses(transactions);
  
  return deposits - withdrawals;
}


export function calculateRevenue(transactions: Transaction[]): number {
  return transactions
    .filter(transaction => transaction.transaction_type === 'deposit')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
}
export function calculateExpenses(transactions: Transaction[]): number {
  return transactions
    .filter(transaction => transaction.transaction_type === 'withdraw')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
}
export function calculatePendingTransactions(transactions: Transaction[]): number {
  const today = Date.now(); 
  return transactions
    .filter(transaction => transaction.date > today) 
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
}

export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


export function getTodayAndSixMonthsAgo(): { todayEpoch: number; sixMonthsAgoEpoch: number } {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const todayEpoch = today.getTime();
  const sixMonthsAgoEpoch = sixMonthsAgo.getTime();
  return { todayEpoch, sixMonthsAgoEpoch };
}
