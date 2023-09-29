import { fetchData } from '@/utilities/fetchData';
import extractOverallColor from '@/utilities/imageColorExtractor';

const DescriptionPage = async ({ params }: { params: { id: string } }) => {
  const movieDetails = await fetchData(
    `/3/movie/${params.id}?`,
    'language=en-US&'
  );
  console.log('details', movieDetails);
  //api.themoviedb.org/3/movie/532408?language=en-US
  //   const router = useRouter();
  //   const color = await extractOverallColor(
  //     'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/nUixrAu0tLn9PwfN7iaBoSAiHkm.jpg'
  //   );
  //   console.log(color);

  https: return <div>DescriptionPage {params.id}</div>;
};

export default DescriptionPage;
