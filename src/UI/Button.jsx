import classNames from 'classnames';
import React from 'react';

export default function Button({ label, href, className = '' }) {
   return (
      <a
         href={href}
         className={classNames(
            'bg-pink-500 p-3 rounded transition-colors hover:bg-pink-600',
            className
         )}
      >
         {label}
      </a>
   );
}
