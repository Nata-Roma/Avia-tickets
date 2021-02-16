import { useEffect, useRef, useState } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import Logo from './components/Logo';
import Modal from './components/tickets/Modal';
import TicketContainer from './components/tickets/TicketContainer';

const ticketArr =
  [{
    price: 10400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '10:45 – 08:00',
        stops: [
          'HKG',
          'JNB',
        ],
        duration: 1275,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '11:20 – 00:50',
        stops: [
          'HKG',
        ],
        duration: 1210,
      },
    ]
  },
  {
    price: 23400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '10:45 – 08:00',
        stops: [
          'JNB',
        ],
        duration: 675,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '11:20 – 00:50',
        stops: [
          'HKG',
        ],
        duration: 810,
      },
    ]
  },
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '10:45 – 08:00',
        stops: [
          'HKG',
          'JNB',
        ],
        duration: 1775,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '11:20 – 00:50',
        stops: [
        ],
        duration: 610,
      },
    ]
  },
  ]
  ;

// date: 2021-02-23T23:09:00.000Z
// duration: 1249

const tabNames = [
  {
    name: 'САМЫЙ ДЕШЕВЫЙ',
    isClicked: false,
  },
  {
    name: 'САМЫЙ БЫСТРЫЙ',
    isClicked: false,
  },
  {
    name: 'ОПТИМАЛЬНЫЙ',
    isClicked: false,
  },
];

const filterChoice = [
  {   name: 'all',
      label: 'Все',
      isClicked: true, 
  },
  {   name: 'direct',
      label: 'Без пересадок',
      isClicked: false, 
  },
  {   name: 'onePoint',
      label: '1 пересадка',
      isClicked: false, 
  },
  {   name: 'twoPoint',
      label: '2 пересадки',
      isClicked: false, 
  },
  {   name: 'threePoint',
      label: '3 пересадки', 
      isClicked: false, 
  },
];

function App() {
  const [fullBase, setFullBase] = useState(ticketArr);
  const [tickets, setTickets] = useState(fullBase);
  const [idSearch, setIdSearch] = useState('');
  const [tabs, setTabs] = useState([...tabNames]);
  const [filters, setFilters] = useState([...filterChoice]);
  const [serverResponse, setServerResponse] = useState(false);

  const [workTickets, setWorkTickets] = useState(fullBase);
  const [moreButton, setMoreButton] = useState(false);

  const handleTabClicked = (tabName) => {
    const state = [...tabs];
    state.map((item) => {
      if (item.name === tabName) {
        item.isClicked = true;
      } else {
        item.isClicked = false;
      }
    });
    setTabs([...state]);
  };

  const handleFilterClicked = (filterName) => {
    const state = [...filterChoice];
    state.map((item) => {
      if (item.name === filterName) {
        item.isClicked = true;
      } else {
          item.isClicked = false;
        }
    });
    setFilters([...state]);
  };

  const moreButtonClick = () => {
    setMoreButton(true);
      setTimeout(() => {
        setMoreButton(false);
        console.log(moreButton);
      }, 3000);
  };

  const getTicketsById = async (idSearch) => {
    await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${idSearch}`)
      .then((response) => response.json())
      .then( (data) => {
        console.log(data.stop);
        setServerResponse(data.stop);
          setFullBase(data.tickets);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch('https://front-test.beta.aviasales.ru/search')
    .then((response) => response.json())
    .then((data) => {
      setIdSearch(data.searchId);
      getTicketsById(data.searchId);
    })

  }, []);

  useEffect((() => {
    setTickets([...fullBase]);
    setWorkTickets([...tickets]);
  }), [fullBase]);


  useEffect(() => {
    const activeTab = tabs.filter((tab) => tab.isClicked);
    let chipArr = [];
    const check = filters[0].isClicked;
    if(check) {
      chipArr = [...tickets];
    } else {
      chipArr = [...workTickets];
    }

    if (activeTab.length > 0 && activeTab[0].name === 'САМЫЙ ДЕШЕВЫЙ') {
      chipArr = chipArr.sort((a, b) => a.price - b.price);
      if(check) {
        setTickets([...chipArr]);
      } else {
        setWorkTickets([...chipArr]);
      }
      
    }

    if (activeTab.length > 0 && activeTab[0].name === 'САМЫЙ БЫСТРЫЙ') {
      chipArr = chipArr.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
      if(check) {
        setTickets([...chipArr]);
      } else {
        setWorkTickets([...chipArr]);
      }
    }

  }, [tabs]);

  // left side Filter panel
  const filterSwitch = (tag) => {
    let chipArr = [...tickets];
    switch (tag) {
      case 'direct':
        chipArr = chipArr.filter((item) => item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0);
        return chipArr;
      case 'onePoint':
        chipArr = chipArr.filter((item) => {
            return item.segments[0].stops.length === 1 && item.segments[1].stops.length === 0 ||
                    item.segments[0].stops.length === 0 && item.segments[1].stops.length === 1 
          });
          return chipArr;
      case 'twoPoint':
        chipArr = chipArr.filter((item) => {
          return item.segments[0].stops.length === 2 && item.segments[1].stops.length === 0 ||
                  item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1 ||
                  item.segments[0].stops.length === 0 && item.segments[1].stops.length === 2 
        });
        return chipArr;
      case 'threePoint':
        chipArr = chipArr.filter((item) => {
          return  item.segments[0].stops.length === 3 && item.segments[1].stops.length === 0 ||
                  item.segments[0].stops.length === 2 && item.segments[1].stops.length === 1 ||
                  item.segments[0].stops.length === 1 && item.segments[1].stops.length === 2 ||
                  item.segments[0].stops.length === 0 && item.segments[1].stops.length === 3
        });
        return chipArr;
      default:
        return chipArr;
    };
  };

  useEffect(() => {
    setWorkTickets([...tickets]);
    let chipArr = [...tickets];
    const activeFilters = filters.filter((filter) => filter.isClicked);
    const tags = activeFilters.map((filter) => filter.name);
    chipArr = [...filterSwitch(tags[0])];
    setWorkTickets(chipArr);
  }, [filters]);

 
  return (
    <div className='main-div'>
    <div className='app'>
      <Logo />
      <div className='main'>
        <Filter filterChoice={filterChoice} choice={handleFilterClicked} />
          <TicketContainer
          tickets={filters[0].isClicked ? tickets.slice(0, 5) : workTickets.slice(0, 5)}
          tabNames={tabs}
          clicked={handleTabClicked}
          button={moreButtonClick}
        />
        
      </div>
      </div>
      {moreButton && <Modal />}
    </div>
  );
}

export default App;
