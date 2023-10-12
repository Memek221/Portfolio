import React from 'react';

export default function Pagination({ itemsPerPage, totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex gap-6">
      {pageNumbers.map(number => (
        <a key={number}
          onClick={() => {
            paginate(number);
          }}
        >
          <li className="border-2 border-pink-500 rounded w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-pink-500 transition-all">
            {number}
          </li>
        </a>
      ))}
    </ul>
  );
}
