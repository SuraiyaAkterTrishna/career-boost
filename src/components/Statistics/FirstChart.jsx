import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  const data = [
    {"name": "A1", "marks": 60},
    {"name": "A2", "marks": 59},
    {"name": "A3", "marks": 60},
    {"name": "A4", "marks": 60},
    {"name": "A5", "marks": 56},
    {"name": "A6", "marks": 60},
    {"name": "A7", "marks": 60},
    {"name": "A8", "marks": 60},
    {"name": "A9", "marks": 60},
    {"name": "A10", "marks": 60},
    {"name": "A11", "marks": 29},
    {"name": "A12", "marks": 24}
  ];

const FirstChart = () => {
    return (
      <BarChart
      width= {700}
      height={430}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="marks" fill="#8884d8" />
    </BarChart>
    );
};

export default FirstChart;