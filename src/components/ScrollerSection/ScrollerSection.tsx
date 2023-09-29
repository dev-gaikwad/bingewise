import {
  MovieContentType,
  ScrollerSectionPropType,
  TVContentType,
} from '../../../Types';
import ContentDescTile from '../ContentDescTile/ContentDescTile';

const ScrollerSection = ({ heading, dataArray }: ScrollerSectionPropType) => {
  return (
    <section className='container'>
      <div className='column-header'>
        <h3 className='section-heading'>{heading}</h3>
      </div>
      <div className=' flex-x-scroller'>
        {dataArray.map((item) => (
          <ContentDescTile key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
};

export default ScrollerSection;
