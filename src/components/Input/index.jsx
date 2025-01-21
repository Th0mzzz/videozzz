import styles from "./input.module.css";

const Input = ({ type, placeholder, idInput }) => {
    return (
        <div class="form-floating mb-3">
            <input type={type} class="form-control" id={idInput} placeholder={placeholder} />
            <label for={idInput}>{placeholder}</label>
        </div>
    )
}

export default Input;