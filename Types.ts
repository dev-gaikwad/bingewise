export type ContentDataType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  vote_average: number;
  vote_count: number;
};

export type MovieContentType = ContentDataType & {
  title: string;
  original_title: string;
  release_date: string;
};

export type TVContentType = ContentDataType & {
  name: string;
  original_name: string;
  origin_country: [];
  first_air_date: string;
};

export type ScrollerSectionPropType = {
  heading: string;
  dataArray: MovieContentType[] | TVContentType[];
};

export type ContentDescTilePropType = {
  content: MovieContentType | TVContentType;
};

// {
//     adult: false,
//     backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
//     id: 298618,
//     title: 'The Flash',
//     original_language: 'en',
//     original_title: 'The Flash',
//     overview: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
//     poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
//     media_type: 'movie',
//     genre_ids: [Array],
//     popularity: 1830.716,
//     release_date: '2023-06-13',
//     video: false,
//     vote_average: 6.954,
//     vote_count: 2561
//   },

//   {
//     adult: false,
//     backdrop_path: '/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg',
//     id: 37854,
//     name: 'One Piece',
//     original_language: 'ja',
//     original_name: 'ワンピース',
//     overview: 'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n' +
//       '\n' +
//       `Monkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n` +
//       '\n' +
//       'Luffy will do anything to get the One Piece and become King of the Pirates!',
//     poster_path: '/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg',
//     media_type: 'tv',
//     genre_ids: [Array],
//     popularity: 271.904,
//     first_air_date: '1999-10-20',
//     vote_average: 8.725,
//     vote_count: 3940,
//     origin_country: [Array]
//   },
