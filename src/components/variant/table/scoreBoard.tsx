import React from 'react';

// Scoreboard Table Variant Configuration
export const scoreBoardCSS = {
  container: "w-full overflow-x-auto min-w-0",
  table: "w-full min-w-[600px] border-collapse",
  thead: "bg-gray-700",
  tbody: "bg-white",
  headerRow: "",
  headerCell: "px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-left text-[10px] sm:text-xs md:text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap",
  row: "border-b border-gray-200 hover:bg-gray-50 transition-colors",
  cell: "px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm text-gray-900 whitespace-nowrap",
  highlightedRow: "bg-pink-500 hover:bg-pink-600"
};

export const scoreBoardData = {
  columns: [
    { key: 'rank', label: '#', align: 'center' as const },
    { key: 'team', label: 'TEAM', align: 'left' as const },
    { key: 'matches', label: 'M', align: 'center' as const },
    { key: 'won', label: 'W', align: 'center' as const },
    { key: 'lost', label: 'L', align: 'center' as const },
    { key: 'nrr', label: 'NRR', align: 'center' as const },
    { key: 'points', label: 'PTS', align: 'center' as const }
  ],
  rows: [
    {
      rank: 'Q',
      team: 'Punjab Kings',
      matches: 14,
      won: 9,
      lost: 4,
      nrr: '+0.372',
      points: 19
    },
    {
      rank: 'Q',
      team: 'Royal Challengers Bengaluru',
      matches: 14,
      won: 9,
      lost: 4,
      nrr: '+0.301',
      points: 19
    },
    {
      rank: 'Q',
      team: 'Gujarat Titans',
      matches: 14,
      won: 9,
      lost: 5,
      nrr: '+0.254',
      points: 18
    },
    {
      rank: 'Q',
      team: 'Mumbai Indians',
      matches: 14,
      won: 8,
      lost: 6,
      nrr: '+1.142',
      points: 16
    },
    {
      rank: 5,
      team: 'Delhi Capitals',
      matches: 14,
      won: 7,
      lost: 6,
      nrr: '+0.011',
      points: 15
    },
    {
      rank: 6,
      team: 'Sunrisers Hyderabad',
      matches: 14,
      won: 6,
      lost: 7,
      nrr: '-0.241',
      points: 13
    },
    {
      rank: 7,
      team: 'Lucknow Super Giants',
      matches: 14,
      won: 6,
      lost: 8,
      nrr: '-0.376',
      points: 12
    },
    {
      rank: 8,
      team: 'Kolkata Knight Riders',
      matches: 14,
      won: 5,
      lost: 7,
      nrr: '-0.305',
      points: 12
    },
    {
      rank: 9,
      team: 'Rajasthan Royals',
      matches: 14,
      won: 4,
      lost: 10,
      nrr: '-0.549',
      points: 8
    },
    {
      rank: 10,
      team: 'Chennai Super Kings',
      matches: 14,
      won: 4,
      lost: 10,
      nrr: '-0.647',
      points: 8
    }
  ],
  highlightedRowIndex: 8 // Rajasthan Royals row (0-indexed)
};
