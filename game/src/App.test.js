import { render,screen} from '@testing-library/react';
import { Button } from './Components/button';
import { DashCard } from './Components/dashCard';

test('renders learn react link', () => {
  render(<Button />);
  // const linkElement = screen.findAllByText;
  // expect(linkElement).toBeInTheDocument();
});
test('testing the dashcard', () => {
  render(<DashCard />);
  // const linkElement = screen.findAllByText;
  // expect(linkElement).toBeInTheDocument();
});
