import { useState } from "react";
import HeaderTab from "./HeaderTab";

const TicketHeader = ({tabNames, clicked}) => {
    
    return (
        <div className='header' data-testid='data-header'>
            {tabNames.map((tab) => {
                return (
                    <HeaderTab 
                        key={tab.name}
                        tabName={tab.name} 
                        isClicked={tab.isClicked} 
                        clicked={clicked}  
                    />)
            })}
        </div>
    )
};

export default TicketHeader;