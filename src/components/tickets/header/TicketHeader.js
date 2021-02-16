import { useState } from "react";
import HeaderTab from "./HeaderTab";

const TicketHeader = () => {
    const tabNames = [
        {
            name: 'САМЫЙ ДЕШЕВЫЙ',
            isClicked: true,
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

    const [tabs, setTabs] = useState([...tabNames]);
    

    const handleTabClicked = (tabName) => {
        const state = [...tabs];
        state.map((item) => {
            if(item.name === tabName) {
                item.isClicked = true;
            } else {
                item.isClicked = false;
            }
        });
        setTabs([...state]);
    };

    return (
        <div className='header'>
            {tabs.map((tab) => {
                return (
                    <HeaderTab 
                        key={tab.name}
                        tabName={tab.name} 
                        isClicked={tab.isClicked} 
                        clicked={handleTabClicked}  
                    />)
            })}
        </div>
    )
};

export default TicketHeader;