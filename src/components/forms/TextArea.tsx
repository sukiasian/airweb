interface TextAreaProps {
	className: string
	label: string
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({
	className,
	label,
	placeholder,
	value,
	onChange,
}: TextAreaProps): JSX.Element => {
	return (
		<div className={`text-area-container ${className}-field`}>
			{label ? <label>{label}</label> : null}
			<textarea
				className={className}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default TextArea
