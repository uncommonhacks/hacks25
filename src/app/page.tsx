import React from 'react';
import Image from 'next/image';

// const imageStyle = {
//     borderRadius: '10%',
//     border: '1px solid #fff',
// }

export default function Home() {
  return (
      <main>
        <div>
            <Image
                className="tv-image"
                src="tv.svg"
                alt="TV"
                width={210}
                height={170}
                // onLoad={(e) => console.log(e.target.)}
                // style={imageStyle}
            />
        </div>
      </main>
  );
}
