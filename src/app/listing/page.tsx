import ScrollerSection from '@/components/ScrollerSection/ScrollerSection';
import { fetchData } from '@/utilities/fetchData';

const ListingPage = async () => {
  const trendingAllData = await fetchData('/3/trending/all/day?');
  const listOfTrendingAll = [...trendingAllData.results];

  const popularContent = await fetchData(
    '/3/movie/popular?',
    'language=en-US&'
  );
  const listOfPopularContent = [...popularContent.results];

  return (
    <>
      <ScrollerSection
        heading={'Trending today'}
        dataArray={listOfTrendingAll}
      />

      <ScrollerSection heading={'Popular'} dataArray={listOfPopularContent} />
    </>
  );
};

export default ListingPage;
