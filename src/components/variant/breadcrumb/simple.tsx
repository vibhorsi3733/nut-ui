import React from 'react';

export const simpleBreadcrumbCSS = {
  container: "",
  list: "flex items-center space-x-2",
  item: "flex items-center",
  link: "text-sm text-gray-500 hover:text-gray-700",
  separator: "mx-2 text-gray-400",
  icon: "mr-1"
};

export const simpleBreadcrumbData = {
  items: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Current Page" }
  ],
  separator: "slash" as const
};
