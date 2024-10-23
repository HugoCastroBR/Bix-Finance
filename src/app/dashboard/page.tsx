'use client';
import React, { useEffect, useState } from 'react';
import DashBoardHeader from '../components/molecules/DashBoardHeader';
import CardContainer from '../components/organisms/CardContainer';
import DataTable from '../components/organisms/DataTable';
import MainContainer from '../components/organisms/MainContainer';
import SideDrawer from '../components/organisms/SideDrawer';
import { useRouter } from 'next/navigation';
import Loading from '../components/pages/Loading';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading/>; 
  }

  return (
    <MainContainer as={'main'}>
      <DashBoardHeader dashboard />
      <CardContainer />
      <DataTable />
      <SideDrawer onDrawerToggle={() => { }} />
    </MainContainer>
  );
}
