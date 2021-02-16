import { useState } from "react";

const FilterChoice = ({name, label}) => {

    const [isChecked, setChecked] = useState(false);

    return (
        <div className='filter-choice'>
            <input type='checkbox' name={name} checked={isChecked}  className='filter-choice__input' onChange={() => setChecked(!isChecked)} />
            <label className='filter-choice__label' onClick={() => setChecked(!isChecked)} >{label}</label>
        </div>
    )
};

export default FilterChoice;