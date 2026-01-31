// Example: Using Table component in your application

import { Table } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const tableCSS = {
    container: "w-full overflow-x-auto",
    table: "min-w-full divide-y divide-gray-200",
    thead: "bg-gray-50",
    tbody: "bg-white divide-y divide-gray-200",
    headerRow: "",
    headerCell: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    row: "hover:bg-gray-50",
    cell: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
    highlightedRow: "bg-yellow-50"
  };

  // Define data object with columns and rows
  const tableData = {
    columns: [
      { key: 'name', label: 'Name', align: 'left' as const },
      { key: 'score', label: 'Score', align: 'center' as const },
      { key: 'status', label: 'Status', align: 'right' as const }
    ],
    rows: [
      { name: 'Team A', score: 150, status: 'Active' },
      { name: 'Team B', score: 200, status: 'Active' },
      { name: 'Team C', score: 175, status: 'Inactive' }
    ],
    highlightedRowIndex: 1
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Table css={tableCSS} data={tableData} />
    </div>
  );
}

export default MyPage;
