export default function ScrollIndicator() {
  const items = Array(20).fill("///SCROLL TO CONTINUE")

  return (
    <div className="overflow-hidden py-3 bg-[#080808] border-y border-white/5">
      <div className="flex animate-marquee-slow">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[10px] font-mono text-white/10 tracking-[0.2em] uppercase whitespace-nowrap mx-3"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
