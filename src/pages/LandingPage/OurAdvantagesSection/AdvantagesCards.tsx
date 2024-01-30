import React from "react";
import BlueBackground from "../../../hoc/BlueBackground";

const AdvantagesCards = (): JSX.Element => {
	const cards = [
		{ 
			name: 'semantics', 
			image: require('../../../assets/images/advantages/semantics.png'),
			text: 'Every tool we use have its purpose. One of our main principles is to use each tool as intended - this leverages the full potential of computing power.'
		},
		{ 
			name: 'efficiency',
			image: require('../../../assets/images/advantages/efficiency.png'), 
			text: 'Well-functioning structure helps us to create high-quality applications with less time spent. Outsourcing capabilities may also help to find an optimal contractor.'
		},
		{ 
			name: 'security',
			image: require('../../../assets/images/advantages/security.png'), 
			text: 'We never connive security. Insecure application is a building with a shaky base - our purpose is to withstand anything.'
		},
		{ 
			name: 'user-friendliness',
			image: require('../../../assets/images/advantages/user-friendliness.png'),
			text: 'User satisfaction is at the core of our design philosophy. By focusing on user experience, we enhance engagement and ensure that our applications are accessible and enjoyable for a diverse audience - which in turn grows your business.' 
		},
	];

	return <BlueBackground classnames="margin-top-large"><div className="advantages-cards">
		{ cards.map((card, i) => <React.Fragment key={i}>
			<img id={`advantage-${card.name}`} className="advantage-card-image" src={card.image} />
			<div className={`advantage-card-text-container advantage-card-text-container--${card.name}`}>
				<p className="paragraph paragraph--bold word-highlight ">{card.name.toUpperCase()}</p>
				<p className="paragraph">{card.text}</p>
			</div>
		</React.Fragment>)}
	</div></BlueBackground>
}

export default AdvantagesCards;