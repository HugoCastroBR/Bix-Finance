'use client';
import React from 'react';
import CardContainer from '../organisms/CardContainer';
import ChartsContainer from '../organisms/ChartsContainer';
import SideDrawer from '../organisms/SideDrawer';
import DashBoardHeader from '../molecules/DashBoardHeader';
import MainContainer from '../organisms/MainContainer';
import DataTable from '../organisms/DataTable';
import Footer from '../molecules/Footer';
import { Provider } from 'react-redux';
import store from '@/app/store';



export default function DashBoard() {
  return (
    <Provider store={store} >
      <MainContainer>
        <DashBoardHeader />
        <CardContainer/>
        <DataTable/>
        {/* <ChartsContainer /> */}
        <SideDrawer onDrawerToggle={() => {}} />
        <Footer />
      </MainContainer>
    </Provider>

  );
}
