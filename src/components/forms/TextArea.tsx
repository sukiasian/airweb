interface TextAreaProps {
    className: string
    label: string
    placeholder: string
}

const TextArea = ({ className, label, placeholder }: TextAreaProps): JSX.Element => {
    return <div className={`text-area-container ${className}-field`}>
        {label ? <label>{label}</label> : null }
        <textarea className={className} placeholder={placeholder} />
    </div>;
};

export default TextArea;
