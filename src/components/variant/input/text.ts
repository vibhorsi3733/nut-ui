export const textInputCSS = {
  container: "w-full",
  label: "block text-sm font-medium text-gray-700 mb-1",
  input: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  helperText: "mt-1 text-sm text-gray-500",
  errorText: "mt-1 text-sm text-red-600"
};

export const textInputData = {
  label: "Email",
  placeholder: "Enter your email",
  type: "email" as const,
  helperText: "We'll never share your email.",
  required: true
};
