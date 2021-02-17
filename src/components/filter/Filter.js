import FilterChoice from "./FilterChoice"

const Filter = ({filterChoice, choice}) => {

return (
    <div className='filter' data-testid='data-filter'>
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