import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithIntl } from 'src/helper/tests';
import AppContainer from '../index';

describe('Test komponentu appContainer', () => {
  afterEach(cleanup);

  describe('Sekcja rysowania komponentu', () => {
    it('Sprawdzenie klasy nadrzędnej', () => {
      const { container } = renderWithIntl(AppContainer, {});
      expect(container.firstChild).toHaveClass('app-container');
    });
  });
});
