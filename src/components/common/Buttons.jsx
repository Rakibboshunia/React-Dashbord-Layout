export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, ...props }) {
  return (
    <button
      className="border border-red-400 text-red-500 px-6 py-2 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}
