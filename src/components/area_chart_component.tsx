// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import AreaChartOne from './area_chart_one';
export default function AreaCartComponent({ mounted, setTimeRange, timeRange, chartData }) {

    const ranges = [
        { label: '7D', value: '7d' },
        { label: '1M', value: '1m' },
        { label: '1Y', value: '1y' },
    ]
    return (
        <div className={`lg:col-span-2 transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-500 h-full shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                    <div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Revenue Trends</h2>
                        <p className="text-slate-400 text-xs sm:text-sm">Track your financial performance</p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 bg-slate-800/50 p-1 rounded-lg sm:rounded-xl backdrop-blur-sm w-full sm:w-auto">
                        {ranges.map((range) => (
                            <button
                                key={range.value}
                                onClick={() => setTimeRange(range.value)}
                                className={`flex-1 sm:flex-none px-3 sm:px-5 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm ${timeRange === range.value
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                                    }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={250} className="sm:hidden">
                    <AreaChartOne chartData={chartData} timeRange={timeRange} />
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={320} className="hidden sm:block">
                    <AreaChartOne chartData={chartData} timeRange={timeRange} />
                </ResponsiveContainer>
            </div>
        </div>
    )
}