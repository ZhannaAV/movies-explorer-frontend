import './SignInput.css'


function SignInput({id, type, name, label, inputValue, setValue}) {

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <>
            <label htmlFor={id} className='sign__label'>{label}</label>
            <input id={id} className={`sign__input sign__input_type_${name}`}
                   type={type}
                   name={name}
                   required value={inputValue} onChange={handleChange}/>
            <span className={`sign__input-error signup-${name}-error`}/>
        </>
    )
}

export default SignInput