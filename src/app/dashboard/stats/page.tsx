'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/app/store';
import DashBoardHeader from '@/app/components/molecules/DashBoardHeader';
import CardContainer from '@/app/components/organisms/CardContainer';
import ChartsContainer from '@/app/components/organisms/ChartsContainer';
import MainContainer from '@/app/components/organisms/MainContainer';
import SideDrawer from '@/app/components/organisms/SideDrawer';

export default function DashBoard() {
  return (
    <Provider store={store} >
      <MainContainer>
        <DashBoardHeader />
        <CardContainer/>
        <ChartsContainer />
        <SideDrawer onDrawerToggle={() => {}} />
      </MainContainer>
    </Provider>

  );
}
