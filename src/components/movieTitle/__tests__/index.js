import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithIntl } from 'src/helper/tests';
import MovieTitle from '../index';

const renderMovieTitle = (props) => {
  return renderWithIntl(MovieTitle, props);
};

describe('Test komponentu moveTitle', () => {
  afterEach(cleanup);

  describe('Sekcja rysowania', () => {
    it('Sprawdzenie klasy nadrzędnej', () => {
      const { container } = renderMovieTitle({});
      expect(container.firstChild).toHaveClass('movie-title');
    });
  });

  describe('Sekcja wprowadzanych wartości', () => {
    it('Wszyskie wartości', () => {
      const props = {
        title: 'star wars',
        rating: 5.5,
        maxRating: 10,
      };

      const pattern = `${props.title} (${props.rating}/${props.maxRating})`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });

    it('Brak tytułu', () => {
      const props = {
        title: undefined,
        rating: 5.5,
        maxRating: 10,
      };

      const pattern = `${'Brak tytułu'} (${props.rating}/${props.maxRating})`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });

    it('Brak oceny', () => {
      const props = {
        title: 'star wars',
        rating: undefined,
        maxRating: 10,
      };
      const pattern = `${props.title} Brak oceny`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });

    it('Ocena wyższa niz maksymalna ocena', () => {
      const props = {
        title: 'star wars',
        rating: 20.0,
        maxRating: 10,
      };
      const pattern = `${props.title} (${props.maxRating}/${props.maxRating})`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });

    it('Brak tytułu i oceny', () => {
      const props = {
        title: null,
        rating: null,
        maxRating: 10,
      };
      const pattern = `${'Brak tytułu'} Brak oceny`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });

    it('Skrajny przypadek oceny', () => {
      const props = {
        title: 'star wars',
        rating: 0.0,
        maxRating: 10,
      };
      const pattern = `${props.title} (${props.rating}/${props.maxRating})`;
      const { getByText } = renderMovieTitle(props);
      expect(getByText(pattern)).toBeInTheDocument();
    });
  });
});
