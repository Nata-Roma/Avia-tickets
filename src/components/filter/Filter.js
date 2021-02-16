import FilterChoice from "./FilterChoice"

const Filter = ({filterChoice, choice}) => {

// const filterChoice = [
//     {   name: 'all',
//         label: 'Все'},
//     {   name: 'direct',
//         label: 'Без пересадок'},
//     {   name: 'onePoint',
//         label: '1 пересадка'},
//     {   name: 'twoPoint',
//         label: '2 пересадки'},
//     {   name: 'threePoint',
//         label: '3 пересадки'},
// ];

return (
    <div className='filter'>
        <div className='filter__title'>
            КОЛИЧЕСТВО ПЕРЕСАДОК
        </div>
        {filterChoice.map((item) => {
            return (
                <FilterChoice 
                    name={item.name} 
                    label={item.label} 
                    key={item.name} 
                    clicked={item.isClicked}
                    choice={choice} />
        )})}
        
    </div>
)


};

export default Filter;