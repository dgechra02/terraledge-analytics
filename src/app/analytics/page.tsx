// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { Wallet, TrendingUp, Users, CreditCard, ArrowUpRight, ArrowDownRight, Activity, DollarSign, Zap, Target } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import { chartData, paymentMethodData, transactionTypeData, metrics } from '../../lib/data';
import Header from '@/src/components/header';
import MetricCard from '@/src/components/metric_card';
import AreaCartComponent from '@/src/components/area_chart_component';
import PieChartComponent from '@/src/components/pie_chart_component';
import BarChartComponent from '@/src/components/bar_chart_component';
import BgEffects from '@/src/components/bg_effects';

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);
    const [timeRange, setTimeRange] = useState('7d');
    const [hoveredSegment, setHoveredSegment] = useState(null);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">

            <BgEffects />

            <div className="relative z-10 max-w-[1600px] mx-auto">

                <Header mounted={mounted} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {metrics.map((metric, idx) => (
                        <MetricCard
                            key={idx}
                            mounted={mounted}
                            setActiveCard={setActiveCard}
                            activeCard={activeCard}
                            metric={metric}
                            idx={idx}
                        />
                    ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <AreaCartComponent mounted={mounted} setTimeRange={setTimeRange} timeRange={timeRange} chartData={chartData} />
                    <PieChartComponent mounted={mounted} paymentMethodData={paymentMethodData} setHoveredSegment={setHoveredSegment} hoveredSegment={hoveredSegment} />
                </div>
                <BarChartComponent mounted={mounted} transactionTypeData={transactionTypeData} />
            </div>
        </div>
    );
};

export default Dashboard;

