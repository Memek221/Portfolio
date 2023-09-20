import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLink({ href, target = '_self', icon }) {
   return (
      <a href={href} target={target}>
         <FontAwesomeIcon
            icon={icon}
            size="2xl"
            className="text-pink-500 cursor-pointer transition-colors hover:text-pink-600"
         />
      </a>
   );
}
