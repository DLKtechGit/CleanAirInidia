import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './CategoryChart.css';

const CategoryChart = () => {
  const categoryData = [
    { name: 'Technology', value: 35, color: '#2563EB' },
    { name: 'Web Development', value: 28, color: '#059669' },
    { name: 'JavaScript', value: 20, color: '#D97706' },
    { name: 'React', value: 12, color: '#DC2626' },
    { name: 'Others', value: 5, color: '#64748B' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0];
      return (
        <div className="category-tooltip">
          <p className="category-tooltip-name">
            {data?.name}: {data?.value} posts
          </p>
          <p className="category-tooltip-percentage">
            {((data?.value / categoryData?.reduce((sum, item) => sum + item?.value, 0)) * 100)?.toFixed(1)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="category-legend">
        {payload?.map((entry, index) => (
          <div key={index} className="category-legend-item">
            <div 
              className="category-legend-color"
              style={{ backgroundColor: entry?.color }}
            />
            <span className="category-legend-text">{entry?.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="category-chart-card">
      <div className="category-chart-header">
        <h2 className="category-chart-title">Category Distribution</h2>
        <p className="category-chart-subtitle">
          Blog posts by category
        </p>
      </div>
      <div className="category-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {categoryData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="category-list">
        {categoryData?.map((category, index) => (
          <div key={index} className="category-list-item">
            <div className="category-list-info">
              <div 
                className="category-list-color"
                style={{ backgroundColor: category?.color }}
              />
              <span className="category-list-name">{category?.name}</span>
            </div>
            <div className="category-list-count">
              <span className="category-list-value">{category?.value}</span>
              <span className="category-list-unit">posts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryChart;