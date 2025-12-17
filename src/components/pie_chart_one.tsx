// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PieChartOne({ paymentMethodData, setHoveredSegment, hoveredSegment, }) {
    return (
        <PieChart>
            <Pie
                data={paymentMethodData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                animationDuration={1500}
                onMouseEnter={(_, index) => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
            >
                {paymentMethodData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={hoveredSegment === null || hoveredSegment === index ? 1 : 0.4}
                        stroke={hoveredSegment === index ? entry.color : 'none'}
                        strokeWidth={hoveredSegment === index ? 3 : 0}
                    />
                ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
        </PieChart>
    )
}

const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 rounded-lg p-3 shadow-xl">
                <p className="text-white font-semibold text-sm">{payload[0].name}</p>
                <p className="text-slate-300 text-xs">{payload[0].value}% of transactions</p>
            </div>
        );
    }
    return null;
};