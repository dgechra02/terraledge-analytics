// @ts-nocheck
import { Activity } from "lucide-react";

export default function Header({mounted}) {
    return (
        <div className={`mb-6 sm:mb-10 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-pulsee">
                        Terraledge Dashboard
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base lg:text-xl">Advanced Financial Analytics & Insights</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-indigo-500/30 flex items-center gap-2 sm:gap-3">
                        <Activity className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 animate-pulse" />
                        <span className="text-slate-300 text-sm sm:text-base">Live</span>
                    </div>
                </div>
            </div>
        </div>
    );
}