'use client';
import React, { useState } from 'react';
import SideDrawer from '../organisms/SideDrawer';
import { styled } from '@mui/material/styles'
import { Box, Container, Typography } from '@mui/material';
import theme from '@/app/theme';
import CardContainer from '../organisms/CardContainer';
import Table from '../organisms/Table';
import ChartsContainer from '../organisms/ChartsContainer';

const MainContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  paddingLeft: 60, 
  paddingRight: 0,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 2,
    paddingRight: 2,
  },
}));

const DashBoardHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: 24,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 50,
  },
}))



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
      <CardContainer />
      <div>
        <Table />
      </div>
      <div>
        <ChartsContainer/>
      </div>
      <aside>
        <SideDrawer
          onDrawerToggle={setIsDrawerOpen}
        />
      </aside>
    </MainContainer>
  )
}