import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { calculateExpenses, calculatePendingTransactions, calculateRevenue, calculateTotalBalance } from "@/app/utils/functions";
import { Filters, Transaction } from "@/app/utils/types";
import { readTransactions } from "@/app/utils/asyncFunctions";

function filterTransactions(transactions: Transaction[], filters: Filters): Transaction[] {
  const {  dateRange } = filters;
  return transactions.filter(transaction => {
    if (dateRange?.startDate && dateRange?.endDate) {
      const { startDate, endDate } = dateRange;
      return transaction.date >= startDate && transaction.date <= endDate;
    }
    return true; 
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startDate = parseInt(searchParams.get("startDate") || "0", 0);
  const endDate = parseInt(searchParams.get("endDate") || "0", 0);

  try {
    const transactions = await readTransactions();

    const filteredTransactions = filterTransactions(transactions, { dateRange: { startDate, endDate } });
    
    return NextResponse.json({
      transactions:filteredTransactions,
      amountTotal: calculateTotalBalance(filteredTransactions),
      withdrawTotal: calculateExpenses(filteredTransactions),
      depositTotal: calculateRevenue(filteredTransactions),
      pendingTransactions: calculatePendingTransactions(filteredTransactions),
      total: filteredTransactions.length,
    });
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 });
  }
}
