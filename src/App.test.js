import { render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  const build = () => {
    render(<App/>)
  }

  it('should get pokemon details from API', async () => {
    build();

    expect(await screen.findByText('bulbasaur')).toBeInTheDocument();
  });
});
