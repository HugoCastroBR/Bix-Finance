import theme from "@/app/theme"
import { mdiCashPlus } from "@mdi/js"
import Icon from "@mdi/react"
import { Box, Card, Paper, Typography } from "@mui/material"
import styled from "styled-components"


const InfoCard = styled(Paper)({
  flexShrink: 0,
  width: 'calc(25% - 8px)',
  minWidth: 260,
  height: 160,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 20,
  padding: 12,
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

export interface ICardItemProps{
  fieldName: string,
  value: string | number,
  icon: React.ReactNode
}


export default function CardItem({
  fieldName,
  value,
  icon,
}: ICardItemProps) {
  return(
    <InfoCard>
      <CardIconBox>
        {icon}
      </CardIconBox>
      <ValueBox>
        <Typography
          fontWeight={300}
          fontSize={14}
          color='secondary.dark'
        >
          {fieldName}
        </Typography>
        <Typography
          color='secondary'
          fontWeight={600}
          fontSize={16}
        >
          {value}
        </Typography>
      </ValueBox>
    </InfoCard>
  )
}