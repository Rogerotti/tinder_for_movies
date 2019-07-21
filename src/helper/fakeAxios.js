
import { MOVIE_ACCEPT_URL, MOVIE_REJECT_URL } from 'src/helper/constants';

const generateData = () => {
  return [
    { id: '1and3011',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Inferno',
      summary: 'Lorem ipsum….',
      rating: 5.3 },
    { id: '1and3022',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Night-of-the-day-of-the-dawn-part-2.jpg',
      title: 'Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living Dead Part 2',
      summary: 'Lorem ipsum….',
      rating: 0.5 },
    {
      id: '2301abc',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
      title: 'Star Wars: Episode VII - The Force Awakens',
      summary: 'Star wars.',
      rating: 6.2,
    },
    {
      id: '33333333',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL.jpg',
      title: 'The Shawshank Redemption',
      summary: 'Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu Test Opisu',
      rating: 9.64,
    },
    {
      id: '2301ab1c',
      imageURL: null,
      title: null,
      summary: null,
      rating: null,
    }
  ];
};


const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateData());
    }, 2000);
  });
};

const acceptMovie = (id) => {
  const url = MOVIE_ACCEPT_URL.replace('<id>', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url, id);
    }, 500);
  });
};

const rejectMovie = (id) => {
  const url = MOVIE_REJECT_URL.replace('<id>', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url, id);
    }, 500);
  });
};

export { getMovies, acceptMovie, rejectMovie };
