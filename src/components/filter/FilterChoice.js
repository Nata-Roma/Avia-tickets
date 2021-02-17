
const FilterChoice = ({name, label, clicked, choice}) => {


    return (
        <div className='filter-choice'>
            <input 
                type='checkbox' 
                name={name} 
                checked={clicked} 
                className='filter-choice__input' 
                onChange={() => choice (name)} 
                data-testid='data-input'
            />
            <label 
                className='filter-choice__label' 
                onClick={() => choice(name)} 
                data-testid='data-checkbox'
            >
                {label}
            </label>
        </div>
    )
};

export default FilterChoice;