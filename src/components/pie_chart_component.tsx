// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import PieChartOne from './pie_chart_one';

export default function PieChartComponent({ mounted, paymentMethodData, setHoveredSegment, hoveredSegment, }) {
    return (
        <div className={`transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-500 h-full shadow-2xl">
                <div className="mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Payment Methods</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">Distribution breakdown</p>
                </div>
                <ResponsiveContainer width="100%" height={220} className="sm:hidden">
                    <PieChartOne paymentMethodData={paymentMethodData} setHoveredSegment={setHoveredSegment} hoveredSegment={hoveredSegment} />
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={280} className="hidden sm:block">
                    <PieChartOne paymentMethodData={paymentMethodData} setHoveredSegment={setHoveredSegment} hoveredSegment={hoveredSegment} />
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {paymentMethodData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${hoveredSegment === idx ? 'bg-slate-700/50 scale-105' : 'bg-slate-800/30'}`}
                            onMouseEnter={() => setHoveredSegment(idx)}
                            onMouseLeave={() => setHoveredSegment(null)}
                        >
                            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                            <span className="text-[10px] sm:text-xs text-slate-300 font-medium truncate">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}