import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
 
  const data = [
    {"name": "A1", "marks": 60, "total_mark": 60},
    {"name": "A2", "marks": 59, "total_mark": 60},
    {"name": "A3", "marks": 60, "total_mark": 60},
    {"name": "A4", "marks": 60, "total_mark": 60},
    {"name": "A5", "marks": 56, "total_mark": 60},
    {"name": "A6", "marks": 60, "total_mark": 60},
    {"name": "A7", "marks": 60, "total_mark": 60},
    {"name": "A8", "marks": 60, "total_mark": 60},
    {"name": "A9", "marks": 60, "total_mark": 60},
    {"name": "A10", "marks": 60, "total_mark": 60},
    {"name": "A11", "marks": 29, "total_mark": 60},
    {"name": "A12", "marks": 24, "total_mark": 60}
  ];

const SecondChart = () => {
    return (
        <div style={{ width: "50%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    );
};

export default SecondChart;