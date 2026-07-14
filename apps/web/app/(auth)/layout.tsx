export default function AuthLayout ({children} : {children : React.ReactNode}) {
  return(
    <div className="min-h-screen bg-[#0a0a12] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#9184D9]/10 border border-[#9184D9]/40 flex items-center justify-center text-[#9184D9]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white text-lg font-semibold">ProSync</span>
        </div>
        <p className="text-gray-400 text-sm mt-1">Real-time rental management & inventory twin</p>

        {children}

        <p className="text-center text-gray-500 text-xs mt-6">Protected access · ProSync Fleet Systems</p>
      </div>
    </div>
  )
}