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

const Cards: ICardItemProps[] = [
  {
    fieldName: 'Saldo Total',
    value: 1234,
    icon:
      <Icon
        path={mdiPiggyBankOutline}
        size={2}
        color={theme.palette.secondary.main}
      />
  },
  {
    fieldName: 'Receitas',
    value: 1234,
    icon:
      <Icon
        path={mdiCashPlus}
        size={2}
        color={theme.palette.secondary.main}
      />
  },
  {
    fieldName: 'Despesas',
    value: 1234,
    icon:
      <Icon
        path={mdiCashMinus}
        size={2}
        color={theme.palette.secondary.main}
      />
  },
  {
    fieldName: 'transações pendentes',
    value: 1234,
    icon:
      <Icon
        path={mdiCashClock}
        size={2}
        color={theme.palette.secondary.main}
      />
  }
]

export default function CardContainer() {
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