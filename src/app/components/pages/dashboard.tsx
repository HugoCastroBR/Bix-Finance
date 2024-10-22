'use client';
import React, { useState } from 'react';
import SideDrawer from '../organisms/SideDrawer';
import styled from 'styled-components';
import { Box, Container, Typography } from '@mui/material';
import theme from '@/app/theme';
import CardContainer from '../organisms/CardContainer';
import Table from '../organisms/Table';

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