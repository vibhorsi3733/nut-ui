export const groupCheckboxCSS = {
  container: "flex items-center",
  checkbox: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
  label: "ml-2 text-sm text-gray-700",
  helperText: "mt-1 text-sm text-gray-500",
  errorText: "mt-1 text-sm text-red-600",
  group: "space-y-2",
  item: "flex items-center"
};

export const groupCheckboxData = {
  label: "Select your interests",
  options: [
    { value: "sports", label: "Sports" },
    { value: "music", label: "Music" },
    { value: "travel", label: "Travel" },
    { value: "reading", label: "Reading" }
  ],
  selectedValues: []
};
