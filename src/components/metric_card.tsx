// @ts-nocheck

import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MetricCard({ mounted, setActiveCard, activeCard, metric, idx }) {
    return (
        <div
            key={idx}
            className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
            onMouseEnter={() => setActiveCard(idx)}
            onMouseLeave={() => setActiveCard(null)}
        >
            <div className="relative group cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

                <div className="relative bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-indigo-500/30 group-hover:border-indigo-500/50 transition-all duration-500 h-full transform group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                            <metric.icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                        </div>
                        <div className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${metric.positive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-red-500/30 text-red-300'} backdrop-blur-sm`}>
                            {metric.positive ? <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" /> : <ArrowDownRight className="w-3 sm:w-4 h-3 sm:h-4" />}
                            <span className="text-xs sm:text-sm font-bold">{metric.change}</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2 font-medium">{metric.title}</p>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">{metric.value}</p>
                    </div>

                    <div className="mt-3 sm:mt-4 h-1.5 sm:h-2 bg-slate-800/50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: activeCard === idx ? '100%' : '0%' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
};