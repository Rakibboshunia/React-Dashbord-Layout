import { Icon } from "@iconify/react";

export default function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-6 mb-6">
      <Icon icon="mdi:magnify" className="text-gray-400 text-3xl" />
      <input
        className="flex-1 outline-none text-xl"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="border px-6 py-2 rounded-lg text-lg flex items-center gap-1">
        <Icon icon="mdi:filter-variant" />
        Filter
      </button>
    </div>
  );
}
