import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
}

export const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
};

interface SelectFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: readonly { label: string; value: string }[] | readonly string[];
  placeholder?: string;
}

export const SelectField = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
}: SelectFieldProps) => {
  const isStringArray = typeof options[0] === "string";

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {isStringArray
        ? (options as readonly string[]).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        : (options as readonly { label: string; value: string }[]).map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
    </select>
  );
};

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "number";
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  type = "text",
}: InputFieldProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    />
  );
};
