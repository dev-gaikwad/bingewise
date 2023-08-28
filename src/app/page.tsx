import Link from 'next/link';

const Home = () => {
  return (
    <section>
      <Link href={'/listing'}>
        <button>Explore</button>
      </Link>
    </section>
  );
};

export default Home;
