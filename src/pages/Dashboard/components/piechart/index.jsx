import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Dine In', value: 10, color: '#FF7CA3' },
  { name: 'To Go', value: 20, color: '#FFB572' },
  { name: 'Delivery', value: 30, color: '#65B0F6' },
];

const CustomDonutChart = () => {
  return (
    <div>
      <PieChart width={500} height={300}>
        {/* Vòng tròn chính có các phần tử */}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          cornerRadius={10} // Bo góc
          paddingAngle={5} // Khoảng cách giữa các phần
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
          ))}
        </Pie>

        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  );
};

export default CustomDonutChart;
