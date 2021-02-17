const TicketSegment = (segment) => {
    const {origin, date, destination, duration, stops} = segment;

    const stopString = stops.join(', ');

    const stopage = (stops) => {
        if(stops.length === 0) {
            return 'Без пересадок'
        } else if(stops.length === 1) {
            return 'пересадка'
        } else return 'пересадки'
    }

    const durationFormat = (time) => {
        const days = Math.floor(time / (60 * 24));
        const hours = Math.floor((time / 60) % 24);
        const minutes = Math.round(time % 60)
        let timeOutput;
        if(days >= 1) {
            timeOutput = `${days}д ${hours}ч ${minutes}м`;
        } else {
            timeOutput = `${hours}ч ${minutes}м`;
        }
        return timeOutput;
    }

    const dateFormat = (date, duration) => {

        const outputFormat = (item) => {
            return item > 10 ? item : `0${item}`
        };

        const begin = new Date(date);
        const ms = begin.getTime()+duration*60*1000;
        const end = new Date(ms);
        const hoursB = begin.getUTCHours();
        const minutesB = begin.getUTCMinutes();
        const hoursE = end.getUTCHours();
        const minutesE = end.getUTCMinutes();
        const dateOut = `${outputFormat(hoursB)}:${outputFormat(minutesB)} - ${outputFormat(hoursE)}:${outputFormat(minutesE)}`;
        return dateOut;
    };
    dateFormat(date, duration)
    return (
        <div className='ticket__params'>
                <div className='ticket__params-block'>
                    <span className='params-header'>{origin} - {destination}</span>
                    <span className='params-value'>{dateFormat(date, duration)}</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>В пути</span>
                    <span className='params-value'>{durationFormat(duration)}</span>
                </div>
                <div className='ticket__params-block'>
                    <span className='params-header'>
                    {stops.length > 0 ? stops.length : ''} {stopage(stops)}
                    </span>
                    <span className='params-value'>{stopString}</span>
                </div>
            </div>
    )
};

export default TicketSegment;