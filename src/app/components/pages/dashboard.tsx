'use client';
import React, { useState } from 'react';
import SideDrawer from '../organisms/SideDrawer';
import styled from 'styled-components';
import { Box, Card, Container, Typography } from '@mui/material';
import theme from '@/app/theme';
import { mdiCashPlus } from '@mdi/js';

const MainContainer = styled(Container)({
  width: '100vw',
  height: '100vh',
  paddingLeft: 60,
  paddingRight: 0,
})

const DashBoardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: 32,
  paddingBottom: 24,
})

const CardBox = styled(Box)({
  width: '100%',
})

const InfoCard = styled(Card)({
  width: 400,
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  boxShadow: '4px 4px 8px -2px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.secondary.light,
})

const CardIconBox = styled(Box)({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.primary.light,
  boxShadow: '3px 3px 6px -3px rgba(0,0,0,0.1)',
  borderRadius: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})



export default function DashBoard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <MainContainer>
      <DashBoardHeader>
        <Typography
          variant="h1"
          fontSize={38}
          fontWeight={400}
          color={theme.palette.secondary.main}
        >
          Dashboard
        </Typography>
      </DashBoardHeader>
      <CardBox>
        <InfoCard>
          <CardIconBox>
            ICON
          </CardIconBox>
          <div>
            Receitas
          </div>
        </InfoCard>
      </CardBox>
      <div>
        Table
      </div>
      <div>
        Charts
      </div>
      <aside>
        <SideDrawer
          onDrawerToggle={setIsDrawerOpen}
        />
      </aside>
    </MainContainer>
  )
}