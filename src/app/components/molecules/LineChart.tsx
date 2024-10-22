import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js'; 
import ChartTitle from '../atoms/ChartTitle';
import StyledChartContainer from '../atoms/StyledChartContainer';

interface LineChartProps {
  data: ChartData<'line'>; 
  title: string;
}

const LineChart = ({ data, title }: LineChartProps) => {
  return (
    <StyledChartContainer>
      <ChartTitle variant="h6">{title}</ChartTitle>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </StyledChartContainer>
  );
};

export default LineChart;
