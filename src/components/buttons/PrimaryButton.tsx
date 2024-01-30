import { MouseEventHandler } from 'react'

interface PrimaryButtonProps {
	text: string
	clickHandler?: MouseEventHandler
	className?: string
	type?: "button" | "submit" | "reset"
}

const PrimaryButton = ({
	text,
	clickHandler,
	className,
	type
}: PrimaryButtonProps): JSX.Element => {
	return (
		<button type={type ?? 'button'} className={`button button--primary ${className}`} onClick={clickHandler}>
			{text}
		</button>
	)
}

export default PrimaryButton
