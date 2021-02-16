import TicketHeader from "./header/TicketHeader"
import MoreButton from "./MoreButton"
import Ticket from "./Ticket"

const TicketContainer = ({tickets, clicked, tabNames}) => {

    return (
        <div className='tickets-container'>
            <TicketHeader
                clicked={clicked}
                tabNames={tabNames}
            />
            {tickets.map((ticket, i) => {
                return <Ticket {...ticket} key={i} />
            })}
            
            <MoreButton />
        </div>
    )
    
};

export default TicketContainer;