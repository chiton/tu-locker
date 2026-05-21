type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string> = {
  alarm: "M12 9v4l2.5 2.5M5 4 2.5 6.5M19 4l2.5 2.5M6.5 20.5 8 19M17.5 20.5 16 19M12 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
  box: "m21 8-9-5-9 5 9 5 9-5ZM3 8v8l9 5 9-5V8M12 13v8",
  briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1M4 7h16v12H4V7Zm0 5h16",
  calendar: "M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z",
  camera: "M4 7h3l2-2h6l2 2h3v12H4V7Zm8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  check: "m5 12 4 4L19 6",
  home: "m3 11 9-8 9 8v9h-6v-5H9v5H3v-9Z",
  light: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.75V16h8v-1.25A7 7 0 0 0 12 2Z",
  lock: "M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5V10Zm7 5v2",
  map: "M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  spark: "M13 2 9 12H3l8 2-4 8 10-10h6l-8-2 4-8Z",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z",
  warehouse: "M3 21V8l9-5 9 5v13M7 21v-8h10v8M7 13h10M7 17h10",
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={paths[name] ?? paths.check} />
    </svg>
  );
}
