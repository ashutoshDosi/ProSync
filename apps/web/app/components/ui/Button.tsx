export default function Button({text, isActive, onClick} : {text: string, isActive? : boolean, onClick: () => void}){
  const activeClass = isActive
    ? "bg-[#9184D9]/10 text-[#9184D9]"
    : "text-gray-400 hover:text-gray-200"

  return(
    <button
      type="button"
      className={`flex-1 border-r border-white/10 last:border-r-0 px-3 py-2.5 text-sm font-medium ${activeClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}