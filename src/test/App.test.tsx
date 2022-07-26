import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Verifica se na renderização do app contém:', () => {
  render(<App />);

  test('Doze cards na tela', async () => {
    const allCards = await screen.findAllByTestId('tool-card');
    const length = 12;

    expect(allCards).toHaveLength(length);
  });

  test('Cada card possui uma imagem', async () => {
    const allCards = await screen.findAllByTestId('tool-card-img');

    expect(allCards).toBeInTheDocument();
  });

  test('Cada card possui o nome do app', async () => {
    const allCards = await screen.findAllByTestId('tool-card-name');

    expect(allCards).toBeInTheDocument();
  });

  test('Barra de busca', () => {
    const searchBar = screen.getByTestId('tool-search');
    const inputTextSearch = screen.getByTestId('tool-search-input');

    expect(searchBar).toBeInTheDocument();
    expect(inputTextSearch).toBeInTheDocument();
  });

  test('Botões de paginação', () => {
    const buttons = screen.getAllByTestId('page-button');
    const length = 6;

    expect(buttons).toHaveLength(length);
    expect(buttons).toBeInTheDocument();
  });
});
