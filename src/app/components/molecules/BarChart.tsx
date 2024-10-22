import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js'; 
import ChartTitle from '../atoms/ChartTitle';
import StyledChartContainer from '../atoms/StyledChartContainer';

interface BarChartProps {
  data: ChartData<'bar'>; 
  title: string;
}

const BarChart = ({ data, title }: BarChartProps) => {
  return (
    <StyledChartContainer>
      <ChartTitle variant="h6">{title}</ChartTitle>
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </StyledChartContainer>
  );
};

export default BarChart;
