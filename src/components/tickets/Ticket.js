import TicketSegment from "./TicketSegment";

const Ticket = (ticket) => {

    const { carrier, segments } = ticket;
    const price = (ticket.price).toLocaleString('ru');

    return (
        <div className='ticket-container' data-testid='data-ticket'>
            <div className='ticket__header'>
                <div className='ticket__header-price'>
                    {price} P
                </div>
                <div className='ticket__header-company'>
                    <img src={`https://pics.avs.io/99/36/${carrier}@2x.png`} />
                </div>
            </div>
            {segments.map((segment, i) => (
            <TicketSegment key={i} {...segment} />
            ))}
        </div>
    )
};

export default Ticket