import Image from 'next/image';

import './ContentDescTile.css';

const ContentDescTile = ({ data }: { data: any }) => {
  return (
    <article className='card-style-1'>
      <div className='card-style-1-img'>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
          alt={data.title}
          width={150}
          height={225}
        />
      </div>
      <div className='card-style-1-content'></div>
    </article>
  );
};

export default ContentDescTile;
