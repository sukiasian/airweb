interface InputProps {
	className: string
	label: string
	placeholder: string
	required: boolean
	value: string
	type: string
	onChange: (e: any) => void
}

const Input = ({
	label,
	placeholder,
	className,
	required = false,
	value,
	type,
	onChange,
}: InputProps): JSX.Element => {
	return (
		<div className={`input-container ${className}-field`}>
			<label>{label}</label>
			<input placeholder={placeholder} value={value} onChange={onChange} />{' '}
		</div>
	)
}

export default Input
