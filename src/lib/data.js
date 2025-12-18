import { Wallet, TrendingUp, Users, CreditCard, ArrowUpRight, ArrowDownRight, Activity, DollarSign, Zap, Target } from 'lucide-react';

export const chartData = {
  "7d": [
    { name: "Mon", revenue: 12400, users: 240, transactions: 89 },
    { name: "Tue", revenue: 15800, users: 290, transactions: 112 },
    { name: "Wed", revenue: 13200, users: 265, transactions: 95 },
    { name: "Thu", revenue: 18900, users: 340, transactions: 134 },
    { name: "Fri", revenue: 21500, users: 380, transactions: 156 },
    { name: "Sat", revenue: 16700, users: 310, transactions: 121 },
    { name: "Sun", revenue: 14300, users: 275, transactions: 98 },
  ],
  "1m": [
    { name: "Week 1", revenue: 45000, users: 1200, transactions: 450 },
    { name: "Week 2", revenue: 52000, users: 1450, transactions: 520 },
    { name: "Week 3", revenue: 48000, users: 1350, transactions: 480 },
    { name: "Week 4", revenue: 61000, users: 1680, transactions: 610 },
  ],
  "1y": [
    { name: "Jan", revenue: 145000, users: 4200, transactions: 1450 },
    { name: "Feb", revenue: 162000, users: 4650, transactions: 1620 },
    { name: "Mar", revenue: 158000, users: 4450, transactions: 1580 },
    { name: "Apr", revenue: 181000, users: 5180, transactions: 1810 },
    { name: "May", revenue: 195000, users: 5680, transactions: 1950 },
    { name: "Jun", revenue: 210000, users: 6100, transactions: 2100 },
    { name: "Jul", revenue: 228000, users: 6580, transactions: 2280 },
    { name: "Aug", revenue: 242000, users: 7020, transactions: 2420 },
    { name: "Sep", revenue: 235000, users: 6850, transactions: 2350 },
    { name: "Oct", revenue: 258000, users: 7480, transactions: 2580 },
    { name: "Nov", revenue: 272000, users: 7920, transactions: 2720 },
    { name: "Dec", revenue: 290000, users: 8500, transactions: 2900 },
  ],
};

export const paymentMethodData = [
  { name: "Credit Card", value: 45, color: "#6366f1" },
  { name: "Debit Card", value: 30, color: "#8b5cf6" },
  { name: "Bank Transfer", value: 15, color: "#a855f7" },
  { name: "Digital Wallet", value: 10, color: "#c084fc" },
];

export const transactionTypeData = [
  { name: "Mon", deposit: 3400, withdrawal: 2400, transfer: 1800 },
  { name: "Tue", deposit: 4200, withdrawal: 2800, transfer: 2100 },
  { name: "Wed", deposit: 3800, withdrawal: 2600, transfer: 1900 },
  { name: "Thu", deposit: 4600, withdrawal: 3200, transfer: 2400 },
  { name: "Fri", deposit: 5200, withdrawal: 3800, transfer: 2800 },
  { name: "Sat", deposit: 4100, withdrawal: 2900, transfer: 2200 },
  { name: "Sun", deposit: 3600, withdrawal: 2500, transfer: 1800 },
];

export const metrics = [
  {
    title: "Total Volume",
    value: "$2.4M",
    valueNumeric: 2.4,
    prefix: "$",
    suffix: "M",
    change: "+18.2%",
    icon: Wallet,
    positive: true,
  },
  {
    title: "Active Accounts",
    value: "18,943",
    valueNumeric: 18943,
    prefix: "",
    suffix: "",
    change: "+12.8%",
    icon: Users,
    positive: true,
  },
  {
    title: "Success Rate",
    value: "99.2%",
    valueNumeric: 99.2,
    prefix: "",
    suffix: "%",
    change: "+3.4%",
    icon: Target,
    positive: true,
  },
  {
    title: "Avg Transaction",
    value: "$842",
    valueNumeric: 842,
    prefix: "$",
    suffix: "",
    change: "+7.6%",
    icon: Zap,
    positive: true,
  },
];

