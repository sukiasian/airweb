import { MouseEventHandler } from 'react'

interface PrimaryButtonProps {
	text: string
	clickHandler?: MouseEventHandler
	className?: string
}

const PrimaryButton = ({
	text,
	clickHandler,
	className,
}: PrimaryButtonProps): JSX.Element => {
	return (
		<button className={`${className}`} onClick={clickHandler}>
			{text}
		</button>
	)
}

export default PrimaryButton
