import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl font-bold text-center">
        Welcome to Terraledge
      </h1>
      <Link href='./analytics' className="ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <span className="flex gap-3">
          View Analytics <MoveRightIcon />
      </span>
      </Link>
    </div>
  );
}























// import React, { useState, useEffect } from 'react';
// import { TrendingUp, TrendingDown, DollarSign, Users, Activity, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';
// import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Dashboard = () => {
//   const [mounted, setMounted] = useState(false);
//   const [activeMetric, setActiveMetric] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//     const interval = setInterval(() => {
//       setActiveMetric(prev => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const revenueData = [
//     { month: 'Jan', value: 45000, transactions: 1200 },
//     { month: 'Feb', value: 52000, transactions: 1450 },
//     { month: 'Mar', value: 48000, transactions: 1350 },
//     { month: 'Apr', value: 61000, transactions: 1680 },
//     { month: 'May', value: 55000, transactions: 1520 },
//     { month: 'Jun', value: 67000, transactions: 1890 },
//     { month: 'Jul', value: 72000, transactions: 2100 },
//   ];

//   const transactionData = [
//     { day: 'Mon', success: 340, failed: 12 },
//     { day: 'Tue', success: 390, failed: 8 },
//     { day: 'Wed', success: 420, failed: 15 },
//     { day: 'Thu', success: 380, failed: 10 },
//     { day: 'Fri', success: 450, failed: 7 },
//     { day: 'Sat', success: 290, failed: 5 },
//     { day: 'Sun', success: 250, failed: 4 },
//   ];

//   const metrics = [
//     { title: 'Total Revenue', value: '$847,392', change: '+12.5%', icon: DollarSign, positive: true, color: 'from-emerald-500 to-teal-600' },
//     { title: 'Active Users', value: '24,891', change: '+8.2%', icon: Users, positive: true, color: 'from-blue-500 to-cyan-600' },
//     { title: 'Transactions', value: '12,457', change: '+15.3%', icon: Activity, positive: true, color: 'from-purple-500 to-pink-600' },
//     { title: 'Success Rate', value: '98.4%', change: '+2.1%', icon: CreditCard, positive: true, color: 'from-orange-500 to-red-600' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 overflow-hidden relative">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       {/* Header */}
//       <div className={`relative z-10 mb-8 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
//               FinFlow Analytics
//             </h1>
//             <p className="text-slate-400 text-lg">Real-time financial insights at your fingertips</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50">
//               <span className="text-slate-400 text-sm">Last updated: </span>
//               <span className="text-white font-semibold">Just now</span>
//             </div>
//             <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Metrics Grid */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {metrics.map((metric, idx) => (
//           <div
//             key={idx}
//             className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//             style={{ transitionDelay: `${idx * 100}ms` }}
//           >
//             <div
//               className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${metric.color} p-[2px] hover:scale-105 transition-transform duration-300`}
//               onMouseEnter={() => setActiveMetric(idx)}
//             >
//               <div className="h-full bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-20`}>
//                     <metric.icon className="w-6 h-6" />
//                   </div>
//                   <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
//                     {metric.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
//                     <span className="text-sm font-semibold">{metric.change}</span>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 text-sm mb-1">{metric.title}</p>
//                   <p className="text-3xl font-bold">{metric.value}</p>
//                 </div>
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} transform origin-left transition-transform duration-500 ${activeMetric === idx ? 'scale-x-100' : 'scale-x-0'}`}></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Revenue Chart */}
//         <div className={`lg:col-span-2 transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
//           <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors duration-300">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold mb-1">Revenue Overview</h2>
//                 <p className="text-slate-400">Monthly performance trends</p>
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
//                   7D
//                 </button>
//                 <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
//                   30D
//                 </button>
//                 <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
//                   1Y
//                 </button>
//               </div>
//             </div>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={revenueData}>
//                 <defs>
//                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
//                     <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
//                 <XAxis dataKey="month" stroke="#94a3b8" />
//                 <YAxis stroke="#94a3b8" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: '#1e293b',
//                     border: '1px solid #334155',
//                     borderRadius: '8px',
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#3b82f6"
//                   strokeWidth={3}
//                   fillOpacity={1}
//                   fill="url(#colorValue)"
//                   animationDuration={2000}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Transaction Stats */}
//         <div className={`transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//           <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors duration-300 h-full">
//             <h2 className="text-2xl font-bold mb-1">Weekly Activity</h2>
//             <p className="text-slate-400 mb-6">Transaction success rate</p>
//             <ResponsiveContainer width="100%" height={280}>
//               <BarChart data={transactionData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
//                 <XAxis dataKey="day" stroke="#94a3b8" />
//                 <YAxis stroke="#94a3b8" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: '#1e293b',
//                     border: '1px solid #334155',
//                     borderRadius: '8px',
//                   }}
//                 />
//                 <Bar dataKey="success" fill="#10b981" radius={[8, 8, 0, 0]} animationDuration={1500} />
//                 <Bar dataKey="failed" fill="#ef4444" radius={[8, 8, 0, 0]} animationDuration={1500} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Recent Transactions */}
//       <div className={`relative z-10 mt-6 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
//         <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50">
//           <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
//           <div className="space-y-4">
//             {[
//               { name: 'Payment from Alex Johnson', amount: '+$2,840.00', time: '2 minutes ago', type: 'received' },
//               { name: 'Subscription - Pro Plan', amount: '-$49.00', time: '1 hour ago', type: 'sent' },
//               { name: 'Payment from Sarah Miller', amount: '+$1,250.00', time: '3 hours ago', type: 'received' },
//               { name: 'Server Infrastructure', amount: '-$380.00', time: '5 hours ago', type: 'sent' },
//             ].map((transaction, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center ${transaction.type === 'received' ? 'bg-green-500/20' : 'bg-blue-500/20'}`}>
//                     {transaction.type === 'received' ? (
//                       <TrendingUp className="w-6 h-6 text-green-400" />
//                     ) : (
//                       <TrendingDown className="w-6 h-6 text-blue-400" />
//                     )}
//                   </div>
//                   <div>
//                     <p className="font-semibold group-hover:text-blue-400 transition-colors">{transaction.name}</p>
//                     <p className="text-sm text-slate-400">{transaction.time}</p>
//                   </div>
//                 </div>
//                 <div className={`text-xl font-bold ${transaction.type === 'received' ? 'text-green-400' : 'text-slate-300'}`}>
//                   {transaction.amount}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useState, useEffect } from 'react';
// import { Wallet, TrendingUp, Users, CreditCard, ArrowUpRight, ArrowDownRight, Activity, DollarSign, Zap, Target } from 'lucide-react';
// import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// const Dashboard = () => {
//   const [mounted, setMounted] = useState(false);
//   const [timeRange, setTimeRange] = useState('7d');
//   const [hoveredSegment, setHoveredSegment] = useState(null);
//   const [activeCard, setActiveCard] = useState(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Data for different time ranges
//   const chartData = {
//     '7d': [
//       { name: 'Mon', revenue: 12400, users: 240, transactions: 89 },
//       { name: 'Tue', revenue: 15800, users: 290, transactions: 112 },
//       { name: 'Wed', revenue: 13200, users: 265, transactions: 95 },
//       { name: 'Thu', revenue: 18900, users: 340, transactions: 134 },
//       { name: 'Fri', revenue: 21500, users: 380, transactions: 156 },
//       { name: 'Sat', revenue: 16700, users: 310, transactions: 121 },
//       { name: 'Sun', revenue: 14300, users: 275, transactions: 98 },
//     ],
//     '1m': [
//       { name: 'Week 1', revenue: 45000, users: 1200, transactions: 450 },
//       { name: 'Week 2', revenue: 52000, users: 1450, transactions: 520 },
//       { name: 'Week 3', revenue: 48000, users: 1350, transactions: 480 },
//       { name: 'Week 4', revenue: 61000, users: 1680, transactions: 610 },
//     ],
//     '1y': [
//       { name: 'Jan', revenue: 145000, users: 4200, transactions: 1450 },
//       { name: 'Feb', revenue: 162000, users: 4650, transactions: 1620 },
//       { name: 'Mar', revenue: 158000, users: 4450, transactions: 1580 },
//       { name: 'Apr', revenue: 181000, users: 5180, transactions: 1810 },
//       { name: 'May', revenue: 195000, users: 5680, transactions: 1950 },
//       { name: 'Jun', revenue: 210000, users: 6100, transactions: 2100 },
//       { name: 'Jul', revenue: 228000, users: 6580, transactions: 2280 },
//       { name: 'Aug', revenue: 242000, users: 7020, transactions: 2420 },
//       { name: 'Sep', revenue: 235000, users: 6850, transactions: 2350 },
//       { name: 'Oct', revenue: 258000, users: 7480, transactions: 2580 },
//       { name: 'Nov', revenue: 272000, users: 7920, transactions: 2720 },
//       { name: 'Dec', revenue: 290000, users: 8500, transactions: 2900 },
//     ],
//   };

//   const paymentMethodData = [
//     { name: 'Credit Card', value: 45, color: '#3b82f6' },
//     { name: 'Debit Card', value: 30, color: '#8b5cf6' },
//     { name: 'Bank Transfer', value: 15, color: '#ec4899' },
//     { name: 'Digital Wallet', value: 10, color: '#10b981' },
//   ];

//   const transactionTypeData = [
//     { name: 'Mon', deposit: 3400, withdrawal: 2400, transfer: 1800 },
//     { name: 'Tue', deposit: 4200, withdrawal: 2800, transfer: 2100 },
//     { name: 'Wed', deposit: 3800, withdrawal: 2600, transfer: 1900 },
//     { name: 'Thu', deposit: 4600, withdrawal: 3200, transfer: 2400 },
//     { name: 'Fri', deposit: 5200, withdrawal: 3800, transfer: 2800 },
//     { name: 'Sat', deposit: 4100, withdrawal: 2900, transfer: 2200 },
//     { name: 'Sun', deposit: 3600, withdrawal: 2500, transfer: 1800 },
//   ];

//   const metrics = [
//     { 
//       title: 'Total Volume', 
//       value: '$2.4M', 
//       change: '+18.2%', 
//       icon: Wallet, 
//       positive: true, 
//       gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
//       bgGradient: 'from-violet-500/20 to-fuchsia-500/20'
//     },
//     { 
//       title: 'Active Accounts', 
//       value: '18,943', 
//       change: '+12.8%', 
//       icon: Users, 
//       positive: true, 
//       gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
//       bgGradient: 'from-cyan-500/20 to-indigo-500/20'
//     },
//     { 
//       title: 'Success Rate', 
//       value: '99.2%', 
//       change: '+3.4%', 
//       icon: Target, 
//       positive: true, 
//       gradient: 'from-emerald-500 via-green-500 to-teal-500',
//       bgGradient: 'from-emerald-500/20 to-teal-500/20'
//     },
//     { 
//       title: 'Avg Transaction', 
//       value: '$842', 
//       change: '+7.6%', 
//       icon: Zap, 
//       positive: true, 
//       gradient: 'from-orange-500 via-red-500 to-pink-500',
//       bgGradient: 'from-orange-500/20 to-pink-500/20'
//     },
//   ];

//   const CustomPieTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-lg p-3 shadow-xl">
//           <p className="text-white font-semibold">{payload[0].name}</p>
//           <p className="text-slate-300">{payload[0].value}% of transactions</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-8 relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
//       </div>

//       {/* Floating Orbs */}
//       <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
//       <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20 blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

//       <div className="relative z-10 max-w-[1600px] mx-auto">
//         {/* Header */}
//         <div className={`mb-10 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h1 className="text-6xl font-black mb-3 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
//                 NexFin Dashboard
//               </h1>
//               <p className="text-slate-400 text-xl">Advanced Financial Analytics & Insights</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="px-6 py-3 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-slate-700/50 flex items-center gap-3">
//                 <Activity className="w-5 h-5 text-green-400 animate-pulse" />
//                 <span className="text-slate-300">Live</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {metrics.map((metric, idx) => (
//             <div
//               key={idx}
//               className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//               style={{ transitionDelay: `${idx * 100}ms` }}
//               onMouseEnter={() => setActiveCard(idx)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className={`relative group cursor-pointer h-full`}>
//                 {/* Glow effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
                
//                 <div className={`relative bg-gradient-to-br ${metric.bgGradient} backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500 h-full transform group-hover:scale-105 group-hover:-translate-y-1`}>
//                   <div className="flex items-start justify-between mb-4">
//                     <div className={`p-3 rounded-2xl bg-gradient-to-br ${metric.gradient} shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
//                       <metric.icon className="w-7 h-7 text-white" />
//                     </div>
//                     <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${metric.positive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-red-500/30 text-red-300'} backdrop-blur-sm`}>
//                       {metric.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
//                       <span className="text-sm font-bold">{metric.change}</span>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-slate-400 text-sm mb-2 font-medium">{metric.title}</p>
//                     <p className="text-4xl font-black tracking-tight">{metric.value}</p>
//                   </div>
                  
//                   {/* Progress bar */}
//                   <div className="mt-4 h-2 bg-slate-800/50 rounded-full overflow-hidden">
//                     <div 
//                       className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transition-all duration-1000 ease-out`}
//                       style={{ width: activeCard === idx ? '100%' : '0%' }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//           {/* Revenue Area Chart */}
//           <div className={`lg:col-span-2 transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
//             <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full shadow-2xl">
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Revenue Trends</h2>
//                   <p className="text-slate-400">Track your financial performance</p>
//                 </div>
//                 <div className="flex gap-2 bg-slate-800/50 p-1 rounded-xl backdrop-blur-sm">
//                   {[
//                     { label: '7D', value: '7d' },
//                     { label: '1M', value: '1m' },
//                     { label: '1Y', value: '1y' },
//                   ].map((range) => (
//                     <button
//                       key={range.value}
//                       onClick={() => setTimeRange(range.value)}
//                       className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
//                         timeRange === range.value
//                           ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg scale-105'
//                           : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
//                       }`}
//                     >
//                       {range.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <ResponsiveContainer width="100%" height={320}>
//                 <AreaChart data={chartData[timeRange]} key={timeRange}>
//                   <defs>
//                     <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
//                       <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
//                   <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '12px' }} />
//                   <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                       border: '1px solid #475569',
//                       borderRadius: '12px',
//                       backdropFilter: 'blur(8px)',
//                     }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="revenue"
//                     stroke="#8b5cf6"
//                     strokeWidth={3}
//                     fillOpacity={1}
//                     fill="url(#colorRevenue)"
//                     animationDuration={1500}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Pie Chart */}
//           <div className={`transform transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//             <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full shadow-2xl">
//               <div className="mb-6">
//                 <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Payment Methods</h2>
//                 <p className="text-slate-400">Distribution breakdown</p>
//               </div>
//               <ResponsiveContainer width="100%" height={280}>
//                 <PieChart>
//                   <Pie
//                     data={paymentMethodData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={100}
//                     paddingAngle={0}
//                     dataKey="value"
//                     animationDuration={1500}
//                     onMouseEnter={(_, index) => setHoveredSegment(index)}
//                     onMouseLeave={() => setHoveredSegment(null)}
//                   >
//                     {paymentMethodData.map((entry, index) => (
//                       <Cell 
//                         key={`cell-${index}`} 
//                         fill={entry.color} 
//                         opacity={hoveredSegment === null || hoveredSegment === index ? 1 : 0.4}
//                         stroke={hoveredSegment === index ? entry.color : 'none'}
//                         strokeWidth={hoveredSegment === index ? 4 : 0}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip content={<CustomPieTooltip />} />
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="grid grid-cols-2 gap-3 mt-4">
//                 {paymentMethodData.map((item, idx) => (
//                   <div 
//                     key={idx} 
//                     className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${hoveredSegment === idx ? 'bg-slate-700/50 scale-105' : 'bg-slate-800/30'}`}
//                     onMouseEnter={() => setHoveredSegment(idx)}
//                     onMouseLeave={() => setHoveredSegment(null)}
//                   >
//                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
//                     <span className="text-xs text-slate-300 font-medium">{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Transaction Types Bar Chart */}
//         <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
//           <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 shadow-2xl">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Transaction Types</h2>
//                 <p className="text-slate-400">Weekly activity breakdown</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
//                   <span className="text-sm text-slate-300">Deposits</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
//                   <span className="text-sm text-slate-300">Withdrawals</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-violet-500"></div>
//                   <span className="text-sm text-slate-300">Transfers</span>
//                 </div>
//               </div>
//             </div>
//             <ResponsiveContainer width="100%" height={320}>
//               <BarChart data={transactionTypeData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
//                 <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '12px' }} />
//                 <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                     border: '1px solid #475569',
//                     borderRadius: '12px',
//                     backdropFilter: 'blur(8px)',
//                   }}
//                 />
//                 <Bar dataKey="deposit" fill="#10b981" radius={[8, 8, 0, 0]} animationDuration={1500} />
//                 <Bar dataKey="withdrawal" fill="#06b6d4" radius={[8, 8, 0, 0]} animationDuration={1500} />
//                 <Bar dataKey="transfer" fill="#8b5cf6" radius={[8, 8, 0, 0]} animationDuration={1500} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

