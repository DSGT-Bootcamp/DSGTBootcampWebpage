import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dsgt bootcamp link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DSGT Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});
// import { render } from '@testing-library/react';
// import Enzyme, { mount } from 'enzyme';
// import App from './App';

// // Add your adapter version below
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });

// test('displays a quote', () => {
//   render(<App />);
//   // const quote = document.querySelector('#text p');
//   // expect(quote).toBeInTheDocument();
//   // expect(quote).not.toBeEmptyDOMElement();
// });