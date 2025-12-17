// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function AreaCartOne({ chartData, timeRange}) {
    return (
        <AreaChart data={chartData[timeRange]} key={timeRange}>
            <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
            <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '10px' }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: '10px' }} />
            <Tooltip
                contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgb(99 102 241 / 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(8px)',
                    fontSize: '12px',
                }}
            />
            <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                animationDuration={1500}
            />
        </AreaChart>
    )
}