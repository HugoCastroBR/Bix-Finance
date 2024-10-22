import theme from "@/app/theme"
import { mdiCashPlus } from "@mdi/js"
import Icon from "@mdi/react"
import { Box, Card, Typography } from "@mui/material"
import styled from "styled-components"



const InfoCard = styled(Card)({
  flexShrink: 1,
  width: 360,
  height: 160,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 20,
  padding: 20,
  boxShadow: '4px 4px 8px -2px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.secondary.light,
})

const CardIconBox = styled(Box)({
  width: 80,
  height: 80,
  backgroundColor: theme.palette.secondary.light,
  boxShadow: '3px 3px 6px -3px rgba(0,0,0,0.1)',
  borderRadius: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ValueBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'end',
})


export default function CardItem() {
  return(

    <InfoCard>
      <CardIconBox>
        <Icon path={mdiCashPlus} size={2} color={theme.palette.secondary.main} />
      </CardIconBox>
      <ValueBox>
        <Typography
          fontWeight={300}
          fontSize={16}
          color=''
        >
          Receita
        </Typography>
        <Typography
          color='background'
          fontWeight={600}
          fontSize={26}
        >
          R$1000,00
        </Typography>
      </ValueBox>
    </InfoCard>
  )
}