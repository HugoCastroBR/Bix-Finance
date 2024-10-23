import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartTitle from '../atoms/ChartTitle';
import { ChartData, ChartOptions } from 'chart.js';
import StyledChartContainer from '../atoms/StyledChartContainer';

interface StackedBarChartProps {
  data: ChartData<'bar'>; 
  title: string;
}

const StackedBarChart = ({ data, title }: StackedBarChartProps) => {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, 
      },
      y: {
        stacked: true, 
      },
    },
    plugins: {
      legend: {
        position: 'top', 
      },
    },
  };

  return (
    <StyledChartContainer>
      <ChartTitle variant="h6">{title}</ChartTitle>
      <Bar data={data} options={options} />
    </StyledChartContainer>
  );
};

export default StackedBarChart;
