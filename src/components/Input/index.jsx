import styles from "./input.module.css";

const Input = ({ type, placeholder, idInput, onChanged, value, required = false }) => {
    const changing = (e) => {
        onChanged(e.target.value)
    }
    return (
        <div className="form-floating mb-3">
            <input type={type} className="form-control" id={idInput} placeholder={placeholder} onChange={changing} value={value} required={required}/>
            <label htmlFor={idInput}>{placeholder}</label>
        </div>
    )
}

export default Input;