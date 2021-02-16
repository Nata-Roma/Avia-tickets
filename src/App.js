import './App.css';
import Filter from './components/filter/Filter';
import Logo from './components/Logo';
import MoreButton from './components/tickets/MoreButton';
import TicketContainer from './components/tickets/TicketContainer';

function App() {
  return (
    <div className='app'>
      <Logo />
      <div className='main'>
        <Filter />
        <TicketContainer />
      </div>
      
    </div>
  );
}

export default App;
