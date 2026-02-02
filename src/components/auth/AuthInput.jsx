import { useState } from "react";
import { Icon } from "@iconify/react";

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-3">
      <label className="block text-md font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 px-3 py-3 pr-10 text-sm focus:border-blue-500 focus:outline-none"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            <Icon
              icon={
                showPassword
                  ? "material-symbols:visibility-off-outline"
                  : "material-symbols:visibility-outline"
              }
              width={20}
            />
          </button>
        )}
      </div>
    </div>
  );
}
