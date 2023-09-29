import Image from 'next/image';
import { Source_Sans_3 } from 'next/font/google';

import './ContentDescTile.css';
import Link from 'next/link';
import { ContentDescTilePropType, MovieContentType } from '../../../Types';

const source = Source_Sans_3({ subsets: ['latin'], weight: '400' });

const ContentDescTile = ({ content }: ContentDescTilePropType) => {
  const rating = content.vote_average.toFixed(1);

  const ratingLevel =
    +rating >= 8
      ? 'high'
      : +rating >= 6.5
      ? 'avg'
      : +rating >= 5
      ? 'subpar'
      : 'low';

  function formatDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }

  return (
    <Link href={`/details/${content.id}`}>
      <article className='card-style-1'>
        <div className='card-style-1-img-wrapper'>
          <Image
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${content.poster_path}`}
            alt={'title' in content ? content.title : content.name}
            width={150}
            height={225}
            className='card-style-1-img'
          />
        </div>
        <div className='card-style-1-content'>
          <div className={`rating-wrapper ${ratingLevel}`}>
            <p>{rating}</p>
          </div>
          <div className={`${source.className} info-container`}>
            <p>{'title' in content ? content.title : content.name}</p>
            <div className='sub-info-container'>
              <p>
                {formatDate(
                  'release_date' in content
                    ? content.release_date
                    : content.first_air_date
                )}
              </p>
            </div>
            <p className='media-type-icon'>{content.media_type}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ContentDescTile;
