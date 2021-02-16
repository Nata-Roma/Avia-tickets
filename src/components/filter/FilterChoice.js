
const FilterChoice = ({name, label, clicked, choice}) => {


    return (
        <div className='filter-choice'>
            <input type='checkbox' name={name} checked={clicked}  className='filter-choice__input' onChange={() => choice (name)} />
            <label className='filter-choice__label' onClick={() => choice(name)} >{label}</label>
        </div>
    )
};

export default FilterChoice;