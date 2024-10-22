import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Transaction } from "@/app/utils/types";
import { readTransactions } from "@/app/utils/asyncFunctions";

export type Filters = {
  column?: keyof Transaction;
  operator?: string;
  value?: string;
  dateRange?: {
    startDate: number;
    endDate: number;
  };
};

function filterTransactions(transactions: Transaction[], filters: Filters): Transaction[] {
  const {  dateRange } = filters;
  console.log('dateRange', dateRange)
  return transactions.filter(transaction => {
    if (dateRange?.startDate && dateRange?.endDate) {
      const { startDate, endDate } = dateRange;
      return transaction.date >= startDate && transaction.date <= endDate;
    }
    return true; 
  });
}

function paginateTransactions(transactions: Transaction[], page: number, pageSize: number): Transaction[] {
  const startIndex = (page - 1) * pageSize;
  return transactions.slice(startIndex, startIndex + pageSize);
}

function sortTransactions(transactions: Transaction[], sortBy: keyof Transaction, order: 'asc' | 'desc'): Transaction[] {
  return transactions.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA === undefined && valueB === undefined) return 0; 
    if (valueA === undefined) return order === 'asc' ? 1 : -1; 
    if (valueB === undefined) return order === 'asc' ? -1 : 1; 

    if (order === 'asc') {
      return (valueA > valueB ? 1 : -1);
    } else {
      return (valueA < valueB ? 1 : -1);
    }
  });
}

export async function GET(req: NextRequest) {
  console.log('api call')
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const sortBy = searchParams.get("sortBy") as keyof Transaction || 'date'; 
  const order = (searchParams.get("order") === 'desc' ? 'desc' : 'asc') as 'asc' | 'desc'; 

  const dateRange = {
    startDate: parseInt(searchParams.get("startDate") || "0", 10),
    endDate: parseInt(searchParams.get("endDate") || "Infinity", 10),
  };


  try {
    const transactions = await readTransactions();

    const response = NextResponse.json({
      transactions: [],
      total: 0,
      page,
      pageSize,
    });

    response.headers.append("Cache-Control", "max-age=60, s-maxage=120");
    const filters: Filters = {  dateRange };
    const filteredTransactions = filterTransactions(transactions, filters);

    const sortedTransactions = sortTransactions(filteredTransactions, sortBy, order);
    const paginatedTransactions = paginateTransactions(sortedTransactions, page, pageSize);

    return NextResponse.json({
      transactions: paginatedTransactions,
      total: filteredTransactions.length,
      page,
      pageSize,
    });
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 });
  }
}
