// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function BarChartOne({ transactionTypeData }) {
    return (
        <BarChart data={transactionTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
            <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '10px' }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: '10px' }} />
            <Tooltip
                cursor={{
                    fill: 'rgba(99, 102, 241, 0.08)',
                    radius: 8
                }}
                contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgb(99 102 241 / 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(8px)',
                    fontSize: '12px',
                }}
            />
            <Bar dataKey="deposit" fill="#6366f1" radius={[6, 6, 0, 0]} animationDuration={1500} />
            <Bar dataKey="withdrawal" fill="#8b5cf6" radius={[6, 6, 0, 0]} animationDuration={1500} />
            <Bar dataKey="transfer" fill="#a855f7" radius={[6, 6, 0, 0]} animationDuration={1500} />
        </BarChart>
    )
}