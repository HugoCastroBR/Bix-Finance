'use client';
import React, { useState } from 'react';
import CardContainer from '../organisms/CardContainer';
import ChartsContainer from '../organisms/ChartsContainer';
import SideDrawer from '../organisms/SideDrawer';
import DashBoardHeader from '../molecules/DashBoardHeader';
import MainContainer from '../organisms/MainContainer';
import DataTable from '../organisms/DataTable';
import Footer from '../molecules/Footer';

export default function DashBoard() {
  const [_, setIsDrawerOpen] = useState(false);

  return (
    <MainContainer>
      <DashBoardHeader />
      <CardContainer />
      <DataTable />
      <ChartsContainer />
      <SideDrawer onDrawerToggle={setIsDrawerOpen} />
      <Footer/>
    </MainContainer>
  );
}
