import { Box } from "@mui/material";
import CardItem, { ICardItemProps } from "../molecules/CardItem";
import { styled } from "styled-components";
import theme from "@/app/theme";
import {
  mdiCashPlus,
  mdiCashMinus,
  mdiCashClock,
  mdiPiggyBankOutline
} from "@mdi/js";
import Icon from "@mdi/react"
import { TransactionsStatsResponse } from "@/app/utils/types";
import { useEffect, useState } from "react";
import useStore from "@/app/hooks/useStore";
import { TransactionsSetIsLoading, TransactionsSetTransactionData } from "@/app/store/action";
import { getTodayAndXMonthsAgo } from "@/app/utils/functions";

function formatCurrencyBRL(value: number): string {
  if (!value) return 'R$ 0,00'
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const CardItemContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
  width: '100%',
  padding: 20,
  paddingLeft: 0,
  gap: 16,
  overflowX: 'scroll',
  scrollbarWidth: 'none',
})

const getStats = async (
  startDate: number,
  endDate: number
) => {
  const response = await fetch(`http://localhost:3000/api/stats?startDate=${startDate}&endDate=${endDate}`,
    {
      cache: "no-cache"
    }
  );
  const data = await response.json()
  return data as TransactionsStatsResponse
}

export default function CardContainer({ }) {

  const { states, dispatch } = useStore()

  const [statsData, setStatsData] = useState({
    transactions: [],
    amountTotal: 0,
    withdrawTotal: 0,
    depositTotal: 0,
    pendingTransactions: 0,
    total: 0
  } as TransactionsStatsResponse)

  useEffect(
    () => {
      const handlerGetStats = async () => {
        const { todayEpoch, sixMonthsAgoEpoch } = getTodayAndXMonthsAgo(12)
        const data = await getStats(
          states.transactions.dateFrom || sixMonthsAgoEpoch,
          states.transactions.dateTo || todayEpoch
        )
        setStatsData(data)
        dispatch(TransactionsSetTransactionData(data))
        dispatch(TransactionsSetIsLoading(false))
      }

      dispatch(TransactionsSetIsLoading(true))
      handlerGetStats()
    }
    , [states.transactions.dateFrom, states.transactions.dateTo, dispatch])


  const Cards: ICardItemProps[] = [
    {
      fieldName: 'Saldo Total',
      value: formatCurrencyBRL(statsData.amountTotal),
      icon:
        <Icon
          path={mdiPiggyBankOutline}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'Receitas',
      value: formatCurrencyBRL(statsData.depositTotal),
      icon:
        <Icon
          path={mdiCashPlus}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'Despesas',
      value: formatCurrencyBRL(statsData.withdrawTotal),
      icon:
        <Icon
          path={mdiCashMinus}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'transações pendentes',
      value: statsData.pendingTransactions,
      icon:
        <Icon
          path={mdiCashClock}
          size={2}
          color={theme.palette.secondary.main}
        />
    }
  ]

  return (
    <CardItemContainer>
      {Cards.map((card, index) => (
        <CardItem
          key={index}
          fieldName={card.fieldName}
          value={card.value}
          icon={card.icon}
        />
      ))}
    </CardItemContainer>
  )
}