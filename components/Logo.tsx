type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
  markClassName?: string;
};

export function Logo({ variant = "light", compact = false, className = "", markClassName = "h-16 w-16" }: LogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-slate-950";
  const descriptorColor = isDark ? "text-slate-300" : "text-slate-500";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} framed={isDark} />
      {!compact ? (
        <span className="leading-none">
          <span className={`block text-xl font-black tracking-tight ${textColor}`}>tu-locker</span>
          <span className={`mt-1 block text-xs font-semibold uppercase tracking-[0.18em] ${descriptorColor}`}>
            Self-storage
          </span>
        </span>
      ) : null}
    </span>
  );
}

export function LogoMark({ className = "h-12 w-12", framed = false }: { className?: string; framed?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={framed ? "#eff6ff" : "transparent"} height="56" rx="16" width="56" x="4" y="4" />
      <path d="M12 24.5 32 11.5l20 13" stroke="#1e40af" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      <path d="M16 25v28h32V25L32 15.5 16 25Z" fill="#1d4ed8" />
      <path d="M20.5 27.5 32 20.75l11.5 6.75V48h-23V27.5Z" fill="#2563eb" />
      <path d="M23 31h17M23 37.5h17M23 44h17" stroke="#dbeafe" strokeLinecap="round" strokeWidth="3" />
      <path d="M37 39v-2.7a3 3 0 0 1 6 0V39" stroke="#eff6ff" strokeLinecap="round" strokeWidth="2.5" />
      <rect fill="#eff6ff" height="8.5" rx="2" width="10" x="35" y="38" />
      <circle cx="40" cy="42" fill="#1d4ed8" r="1.1" />
      <path d="M40 43v2" stroke="#1d4ed8" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}
