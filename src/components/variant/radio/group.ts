export const groupRadioCSS = {
  container: "flex items-center",
  radio: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
  label: "ml-2 text-sm text-gray-700",
  helperText: "mt-1 text-sm text-gray-500",
  errorText: "mt-1 text-sm text-red-600",
  group: "space-y-2",
  item: "flex items-center"
};

export const groupRadioData = {
  name: "payment",
  label: "Payment Method",
  options: [
    { value: "credit", label: "Credit Card" },
    { value: "debit", label: "Debit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "bank", label: "Bank Transfer" }
  ],
  selectedValue: "credit"
};
