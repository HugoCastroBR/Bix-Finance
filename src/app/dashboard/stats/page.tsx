'use client';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '@/app/store';
import DashBoardHeader from '@/app/components/molecules/DashBoardHeader';
import CardContainer from '@/app/components/organisms/CardContainer';
import ChartsContainer from '@/app/components/organisms/ChartsContainer';
import MainContainer from '@/app/components/organisms/MainContainer';
import SideDrawer from '@/app/components/organisms/SideDrawer';
import { useRouter } from 'next/navigation';
import Loading from '@/app/components/pages/Loading';

export default function DashBoard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  const checkLogin = () => {
    const sessionData = sessionStorage.getItem('loggedInUser');
    if (!sessionData) {
      router.push('/auth/login');
    } else {
      setLoading(false); 
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) {
    return <Loading/>; 
  }

  return (
    <Provider store={store}>
      <MainContainer>
        <DashBoardHeader />
        <CardContainer />
        <ChartsContainer />
        <SideDrawer onDrawerToggle={() => {}} />
      </MainContainer>
    </Provider>
  );
}
