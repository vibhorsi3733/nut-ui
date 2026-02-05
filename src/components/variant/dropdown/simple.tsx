import React from 'react';

export const simpleDropdownCSS = {
  container: "relative inline-block text-left",
  button: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  menu: "absolute z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
  item: "text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left",
  icon: "mr-2"
};

export const simpleDropdownData = {
  label: "Options",
  items: [
    { label: "Edit", value: "edit" },
    { label: "Duplicate", value: "duplicate" },
    { label: "Delete", value: "delete", divider: true },
    { label: "Archive", value: "archive" }
  ]
};
