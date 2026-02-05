// Example: Using Modal component in your application

import { useState } from 'react';
import { Modal } from '@/developerComponent/componentCollection';

function MyPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Define CSS object with all styling classes
  const modalCSS = {
    overlay: "fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4",
    container: "bg-white rounded-lg shadow-xl max-w-md w-full p-6",
    header: "flex items-center justify-between mb-4",
    title: "text-lg font-semibold text-gray-900",
    closeButton: "text-gray-400 hover:text-gray-500",
    body: "text-gray-600",
    footer: "mt-4 flex justify-end gap-2"
  };

  // Define data object
  const modalData = {
    isOpen: isOpen,
    title: "Confirm Action",
    children: <p>Are you sure you want to proceed?</p>,
    footer: (
      <>
        <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-700 border rounded">
          Cancel
        </button>
        <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded">
          Confirm
        </button>
      </>
    ),
    onClose: () => setIsOpen(false),
    showCloseButton: true
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Modal
      </button>
      <Modal css={modalCSS} data={modalData} />
    </div>
  );
}

export default MyPage;
