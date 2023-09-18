import React from 'react';

import Header from './/Header';
import ImageBackground from '../ImageBackground';

export default function Home() {
   return (
      <section className="h-screen snap-center" id="home">
         <Header />
         <div>{/* Here will be some text */}</div>
         <div>
            <ImageBackground />
         </div>
      </section>
   );
}
