import { render} from '@testing-library/react';
import { Button } from './Components/button';
import { DashCard } from './Components/dashCard';
import { Positioner } from './Components/positioner';
import { StepBox } from './Components/stepBox';

test('renders learn react link', () => {
  render(<Button />);
  //const linkElement = screen.get;
  // expect(linkElement).toBeInTheDocument();
});
test('testing the dashcard', () => {
  render(<DashCard />);
  // const linkElement = screen.findAllByText;
  // expect(linkElement).toBeInTheDocument();
});
test('testing the positioner', () => {
  render(<Positioner />);
  // const linkElement = screen.findAllByText;
  // expect(linkElement).toBeInTheDocument();
});
test('testing the stepBox', () => {
  render(<StepBox />);
  // const linkElement = screen.findAllByText;
  // expect(linkElement).toBeInTheDocument();
});


