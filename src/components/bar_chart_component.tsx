// @ts-nocheck
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import BarChartOne from './bar_chart_one';

export default function BarChartComponent({ mounted, transactionTypeData }) {
    return (
        <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Transaction Types</h2>
                                <p className="text-slate-400 text-xs sm:text-sm">Weekly activity breakdown</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-500"></div>
                                    <span className="text-xs sm:text-sm text-slate-300">Deposits</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-purple-500"></div>
                                    <span className="text-xs sm:text-sm text-slate-300">Withdrawals</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-violet-500"></div>
                                    <span className="text-xs sm:text-sm text-slate-300">Transfers</span>
                                </div>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={250} className="sm:hidden">
                            <BarChartOne transactionTypeData={transactionTypeData} />
                        </ResponsiveContainer>
                        <ResponsiveContainer width="100%" height={320} className="hidden sm:block">
                            <BarChartOne transactionTypeData={transactionTypeData} />
                        </ResponsiveContainer>
                    </div>
                </div>
    )
}