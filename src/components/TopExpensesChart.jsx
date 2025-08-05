import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const ChartWrapper = styled.div`
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1', '#a4de6c'];

const TopExpensesChart = () => {
  const { expenses } = useSelector((state) => state.expenses);

  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const data = Object.entries(categoryTotals)
    .map(([category, amount]) => ({ name: category, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5); 
  return (
    <ChartWrapper>
      <Title>Top Expenses</Title>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            layout="vertical"
            data={data}
            
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" tick={{ fill: '#333', fontSize: 14 }} />
            <Tooltip />
            <Bar dataKey="amount" barSize={20}>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
};

export default TopExpensesChart;