'use client';
import React, { useEffect, useState } from 'react';
import CardContainer from '../organisms/CardContainer';
import ChartsContainer from '../organisms/ChartsContainer';
import SideDrawer from '../organisms/SideDrawer';
import DashBoardHeader from '../molecules/DashBoardHeader';
import MainContainer from '../organisms/MainContainer';
import DataTable from '../organisms/DataTable';
import Footer from '../molecules/Footer';
import { PaginatedTransactionsResponse, TransactionsStatsResponse } from '@/app/utils/types';

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/transactions", {
    cache: "no-cache",
  });
  const data = await response.json();
  return data as PaginatedTransactionsResponse;
};

const getStats = async () => {
  const response = await fetch("http://localhost:3000/api/stats",
    {
      cache: "no-cache"
    }
  );
  const data = await response.json()
  return data as TransactionsStatsResponse
}

export default function DashBoard() {
  const [_, setIsDrawerOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true)
  const [transactionsData,setTransactionsData] = useState({
    page: 0,
    pageSize: 0,
    total: 0,
    transactions: []
  } as PaginatedTransactionsResponse) 

  const [statsData, setStatsData] = useState({
    transactions: [],
    amountTotal: 0,
    withdrawTotal: 0,
    depositTotal: 0,
    pendingTransactions: 0,
    total: 0
  } as TransactionsStatsResponse)

  useEffect(
    () => {
      getData().then(
        (data) => {
          setTransactionsData(data);
          setIsLoading(false)
        }
      );
      getStats().then(
        (data) => {
          setStatsData(data);
        }
      )
    }
  ,[])
  
  return (
    <MainContainer>
      <DashBoardHeader />
      <CardContainer 
        {...statsData}
      />
      <DataTable 
        {...transactionsData}
        isLoading={isLoading}
      />
      <ChartsContainer />
      <SideDrawer onDrawerToggle={setIsDrawerOpen} />
      <Footer/>
    </MainContainer>
  );
}
