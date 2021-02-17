import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
  test('renders Filter component', () => {
    render(<App />);
    const filterBlock = screen.getByTestId('data-filter');
    expect(filterBlock).toBeInTheDocument();
  });

  test('renders tickets Header component', () => {
    render(<App />);
    const headerBlock = screen.getByTestId('data-header');
    expect(headerBlock).toBeInTheDocument();
  });

  test('renders ticket component', () => {
    render(<App />);
    const ticketBlock = screen.queryAllByTestId('data-ticket');
    ticketBlock.forEach((ticket) => expect(ticket).toBeInTheDocument());
  });

  test('Click on Chip tab', () => {
    render(<App />);
    const chipTabs = screen.getAllByTestId('data-tab');
    chipTabs.forEach((tab) => fireEvent.click(tab));
    
  });

  test('Click on Filter label', () => {
    render(<App />);
    const filterTabs = screen.getAllByTestId('data-checkbox');
    filterTabs.forEach((tab) => fireEvent.click(tab));
    
  });
  test('Change Filter checkbox', () => {
    render(<App />);
    const filterCheckbox = screen.getAllByTestId('data-input');
    filterCheckbox.forEach((tab) => {
      fireEvent.change(tab);
      expect(tab).toBeChecked;
    });
    
  }); 