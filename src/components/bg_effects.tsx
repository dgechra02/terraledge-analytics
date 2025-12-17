// @ts-nocheck

export default function BgEffects(){
    return (
        <>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
                    </div>
        
                    <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute bottom-20 sm:bottom-32 left-10 sm:left-32 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full opacity-20 blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </>
    )
}