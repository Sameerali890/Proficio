import { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Back-end Developer',
    students: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Front-end Developer',
    students: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MERN Stack Developer',
    students: 5000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'React.js',
    students: 1500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Vue.js',
    students: 1900,
    pv: 3908,
    amt: 2000,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="80%" height="55%">
        <BarChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="students" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
