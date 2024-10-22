import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { calculateExpenses, calculatePendingTransactions, calculateRevenue, calculateTotalBalance, getTodayAndSixMonthsAgo, isWithinOneYear, readTransactions } from "@/app/utils/functions";




export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startDate = parseInt(searchParams.get("startDate") || "0", 0);
  const endDate = parseInt(searchParams.get("endDate") || "0", 0);

  try {
    const transactions = await readTransactions();

    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date).getTime();
      if(isNaN(transactionDate)) return false;
      if(startDate === 0 && endDate === 0){
        const {todayEpoch, sixMonthsAgoEpoch} = getTodayAndSixMonthsAgo();
        return isWithinOneYear(todayEpoch, transactionDate) && isWithinOneYear(transactionDate, sixMonthsAgoEpoch);
      }
      if(isWithinOneYear(startDate,endDate)){
        console.log('no')
        return false
      }
      return transactionDate >= startDate && transactionDate <= endDate;
    });
    
    
 

    return NextResponse.json({
      transactions:filteredTransactions,
      amountTotal: calculateTotalBalance(transactions),
      withdrawTotal: calculateExpenses(transactions),
      depositTotal: calculateRevenue(transactions),
      pendingTransactions: calculatePendingTransactions(transactions),
      total: filteredTransactions.length,
    });
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 });
  }
}
