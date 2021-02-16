import TicketHeader from "./header/TicketHeader"
import MoreButton from "./MoreButton"
import Ticket from "./Ticket"

const TicketContainer = () => {
    return (
        <div className='tickets-container'>
            <TicketHeader />
            <Ticket />
            <MoreButton />
        </div>
    )
    
};

export default TicketContainer;