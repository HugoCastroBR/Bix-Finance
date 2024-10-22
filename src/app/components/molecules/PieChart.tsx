import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartTitle from '../atoms/ChartTitle';
import { ChartData } from 'chart.js';
import StyledChartContainer from '../atoms/StyledChartContainer';

interface PieChartProps {
  data: ChartData<'pie'>; 
  title: string;
}

const PieChart = ({ data, title }: PieChartProps) => {
  return (
    <StyledChartContainer>
      <ChartTitle variant="h6">{title}</ChartTitle>
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </StyledChartContainer>
  );
};

export default PieChart;
