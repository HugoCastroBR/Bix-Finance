'use client';
import React from 'react';
import DashBoardHeader from '../components/molecules/DashBoardHeader';
import CardContainer from '../components/organisms/CardContainer';
import DataTable from '../components/organisms/DataTable';
import MainContainer from '../components/organisms/MainContainer';
import SideDrawer from '../components/organisms/SideDrawer';

export default function DashBoard() {
  return (
    <MainContainer>
      <DashBoardHeader dashboard />
      <CardContainer />
      <DataTable />
      <SideDrawer onDrawerToggle={() => { }} />
    </MainContainer>
  );
}
