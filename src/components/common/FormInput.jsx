export default function FormInput({ label, type = "text", ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        className="w-full border rounded-lg px-3 py-2 outline-none"
        {...props}
      />
    </div>
  );
}
