'use client';
import { Transaction } from '@/app/utils/types';
import React, { useEffect, useState } from 'react';
import ChartBox from '../atoms/ChartBox';
import ChartPaper from '../atoms/ChartPaper';
import LineChart from '../molecules/LineChart';
import PieChart from '../molecules/PieChart';
import BarChart from '../molecules/BarChart';
import StackedBarChart from '../molecules/StackedBarChart'; // Importando o gráfico de barras empilhadas
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
import { getTransactionTypeData, getLineData, getIndustryData, getStateData, getIndustryTransactionData, getStackedBarData } from '@/app/utils/chartData'; 
import useStore from '@/app/hooks/useStore';

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
  const { states } = useStore();
  const [transactionData, setTransactionData] = useState<Transaction[]>([])

  useEffect(() => {
    setTransactionData(states.transactions.transactionData.transactions)
  }, [states.transactions.dateFrom, states.transactions.dateTo, states.transactions.transactionData.transactions]);

  const transactionTypeData = getTransactionTypeData(transactionData);
  const lineData = getLineData(transactionData);
  const industryData = getIndustryData(transactionData);
  const stateData = getStateData(transactionData);
  const industryTransactionData = getIndustryTransactionData(transactionData);
  const stackedBarData = getStackedBarData(transactionData); 

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
      <ChartPaper>
        <StackedBarChart data={stackedBarData} title="Stacked Transactions" /> 
      </ChartPaper>
    </ChartBox>
  );
};

export default ChartsContainer;
