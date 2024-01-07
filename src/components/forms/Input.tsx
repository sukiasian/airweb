interface InputProps {
    className: string
    label: string
    placeholder: string
    required: boolean
}

const Input = ({ label, placeholder, className, required = false }: InputProps): JSX.Element => {
    return <div className={`input-container ${className}-field`}>
        <label>{label}</label>
        <input placeholder={placeholder} />
    </div>;
};

export default Input;
