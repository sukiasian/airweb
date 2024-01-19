interface WhiteCardProps {
    image: any
    title: string
    description: string
    classnames?: string
}

const WhiteCard = ({ image, title, description, classnames }: WhiteCardProps): JSX.Element => {
    return <div className={`${classnames ?? ''} card--white`}>
		{image}
		<p className="paragraph paragraph--large">{title}</p>
		<p className="paragraph paragraph--small">{description}</p>
    </div>;
};

export default WhiteCard;
