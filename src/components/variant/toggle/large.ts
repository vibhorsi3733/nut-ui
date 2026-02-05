export const largeToggleCSS = {
  container: "flex items-center",
  toggle: "relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200",
  label: "ml-3 text-sm font-medium text-gray-700",
  helperText: "mt-1 text-sm text-gray-500"
};

export const largeToggleData = {
  label: "Enable dark mode",
  checked: true,
  size: "lg" as const,
  helperText: "Switch to dark theme"
};
