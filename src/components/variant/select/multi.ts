export const multiSelectCSS = {
  container: "w-full",
  label: "block text-sm font-medium text-gray-700 mb-1",
  select: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  option: "",
  helperText: "mt-1 text-sm text-gray-500",
  errorText: "mt-1 text-sm text-red-600"
};

export const multiSelectData = {
  label: "Select multiple options",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" }
  ],
  multiple: true,
  helperText: "Hold Ctrl/Cmd to select multiple options."
};
