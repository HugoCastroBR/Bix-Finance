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


function formatCurrencyBRL(value: number): string {
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





export default function CardContainer({
  amountTotal,
  withdrawTotal,
  depositTotal,
  pendingTransactions,
}:TransactionsStatsResponse) {


  const Cards: ICardItemProps[] = [
    {
      fieldName: 'Saldo Total',
      value: formatCurrencyBRL(amountTotal),
      icon:
        <Icon
          path={mdiPiggyBankOutline}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'Receitas',
      value: formatCurrencyBRL(depositTotal),
      icon:
        <Icon
          path={mdiCashPlus}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'Despesas',
      value: formatCurrencyBRL(withdrawTotal),
      icon:
        <Icon
          path={mdiCashMinus}
          size={2}
          color={theme.palette.secondary.main}
        />
    },
    {
      fieldName: 'transações pendentes',
      value: pendingTransactions,
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