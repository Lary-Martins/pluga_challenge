import { render, screen, } from '@testing-library/react';
import App from '../App';

describe('Verifica se na renderização do app contém:', () => {
  render(<App />);

  test('Doze cards na tela', async () => {
    const allCards = await screen.findAllByTestId('tool-card');
    const length = 12;

    expect(allCards).toHaveLength(length);
  });

  test('Barra de busca', () => {
    const searchBar = screen.getByTestId('tool-search');
    const inputTextSearch = screen.getByTestId('tool-search-input');
    const buttonSearch = screen.getByTestId('tool-search-button')

    expect(searchBar).toBeInTheDocument();
    expect(inputTextSearch).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  test('Dois botões de paginação', () => {
    const nextPage = screen.getByTestId('next-page');
    const prevPage = screen.getByTestId('prev-page');

    expect(nextPage).toBeInTheDocument();
    expect(prevPage).toBeInTheDocument();
  });
});