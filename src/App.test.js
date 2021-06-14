import { render, screen } from '@testing-library/react';
import App from './App';
import { Gallery } from './photoViewer/imageGallery';
import ImageUrls from './photoViewer/imageSelector';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check 1st image url is correct', () => {
  render(<Gallery />);
  const image = screen.getByText(ImageUrls[0]);
  
  expect(image).toBeInTheDocument();

});
