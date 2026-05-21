type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  surface?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "left", surface = "light" }: SectionHeadingProps) {
  const isDark = surface === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${isDark ? "text-blue-200" : "text-trust-700"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-lg leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
