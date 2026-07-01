type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-blue-950 hover:bg-yellow-300"
      : "bg-white text-blue-700 hover:bg-blue-50";

  return (
    <button
      className={`rounded-full px-8 py-4 font-bold shadow-lg transition ${styles}`}
    >
      {children}
    </button>
  );
}