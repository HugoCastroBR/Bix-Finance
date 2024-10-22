import { Box } from "@mui/material";
import CardItem from "../molecules/CardItem";
import { styled } from "styled-components";


const CardItemContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
  width: '100%',
  padding: 20,
  gap: 20,
  backgroundColor: 'red',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
})

export default function CardContainer() {
  return(
    <CardItemContainer>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
    </CardItemContainer>
  )
}