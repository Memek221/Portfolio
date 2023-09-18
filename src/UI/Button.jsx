import React from 'react';

export default function Button({ label, href }) {
   return (
      <a href={href} className="bg-pink-500 p-2 rounded">
         {label}
      </a>
   );
}
