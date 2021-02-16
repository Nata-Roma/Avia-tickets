const Ticket = () => {
    return (
        <div className='ticket-container'>
            <div className='ticket__header'>
                <div className='ticket__header-price'>
                    10000 P
                </div>
                <div className='ticket__header-company'>
                    Image
                </div>
            </div>
            <div className='ticket__params'>
                <div className='ticket__params-block'>
                    <span className='params-header'>MOW - HKT</span>
                    <span className='params-value'>10:45 – 08:00</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>В пути</span>
                    <span className='params-value'>21ч 15м</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>2 пересадки</span>
                    <span className='params-value'>HKG, JNB</span>
                </div>
            </div>
            <div className='ticket__params'>
                <div className='ticket__params-block'>
                    <span className='params-header'>MOW - HKT</span>
                    <span className='params-value'>11:20 – 00:50</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>В пути</span>
                    <span className='params-value'>13ч 30м</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>1 пересадка</span>
                    <span className='params-value'>HKG</span>
                </div>
            </div>
        </div>
    )
};

export default Ticket