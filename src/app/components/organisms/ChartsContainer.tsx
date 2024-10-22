'use client';
import { Transaction } from '@/app/utils/types';
import React from 'react';
import ChartBox from '../atoms/ChartBox';
import ChartPaper from '../atoms/ChartPaper';
import LineChart from '../molecules/LineChart';
import PieChart from '../molecules/PieChart';
import BarChart from '../molecules/BarChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { getTransactionTypeData, getLineData, getIndustryData, getStateData, getIndustryTransactionData } from '@/app/utils/chartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


const ChartsContainer = () => {
  const transactionData: Transaction[] = [
    { id: 1, date: 1627849200000, amount: '500', transaction_type: 'deposit', currency: 'USD', account: 'A1', industry: 'Tech', state: 'NY' },
    { id: 2, date: 1627935600000, amount: '1000', transaction_type: 'withdraw', currency: 'EUR', account: 'A2', industry: 'Finance', state: 'CA' },
    { id: 3, date: 1628022000000, amount: '750', transaction_type: 'deposit', currency: 'USD', account: 'A3', industry: 'Retail', state: 'NY' },
    { id: 4, date: 1628108400000, amount: '250', transaction_type: 'deposit', currency: 'USD', account: 'A4', industry: 'Tech', state: 'FL' },
    { id: 5, date: 1628194800000, amount: '1500', transaction_type: 'withdraw', currency: 'GBP', account: 'A5', industry: 'Healthcare', state: 'NY' },
  ];

  const transactionTypeData = getTransactionTypeData(transactionData);
  const lineData = getLineData(transactionData);
  const industryData = getIndustryData(transactionData);
  const stateData = getStateData(transactionData);
  const industryTransactionData = getIndustryTransactionData(transactionData);

  return (
    <ChartBox>
      <ChartPaper>
        <PieChart data={transactionTypeData} title="Transactions by Type" />
      </ChartPaper>
      <ChartPaper>
        <LineChart data={lineData} title="Transaction Amount Over Time" />
      </ChartPaper>
      <ChartPaper>
        <BarChart data={industryData} title="Transactions by Industry" />
      </ChartPaper>
      <ChartPaper>
        <BarChart data={stateData} title="Transactions by State" />
      </ChartPaper>
      <ChartPaper>
        <PieChart data={industryTransactionData} title="Transaction Count by Industry" />
      </ChartPaper>
    </ChartBox>
  );
};

export default ChartsContainer;
