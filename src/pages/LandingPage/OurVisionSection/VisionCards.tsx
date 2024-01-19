import '../../../assets/images/vision-cards/rocket.svg';
import '../../../assets/images/vision-cards/solutions.svg';
import '../../../assets/images/vision-cards/business.svg';
import React from 'react';
import WhiteCard from '../../../components/cards/WhiteCard';

const VisionCards = (): JSX.Element => {
    const visionPoints = [
        {
            image: '#rocket',
            title: 'Be a locomotive',
            description: 'Our vision is to be a locomotive in the realm of software development, through the creation of the most advanced applications that empower businesses to thrive in an ever-evolving digital landscape.'
        },
        {
            image: '#solutions',
            title: 'Transformative solutions',
            description: 'We aspire to be the driving force behind transformative solutions, setting new benchmarks for innovation, efficiency, and user experience.'
        },
        {
            image: '#business',
            title: 'Business oriented passion',
            description: 'By combining our passion for technology with an unwavering commitment to excellence, we strive to be the trusted partner for businesses seeking to harness the full potential of digital innovation.'
        }
    ];

    return <div data-scroll-section className="vision-cards margin-top-large">
        {visionPoints.map((card, i) => {
            return <React.Fragment key={i}>
                <WhiteCard classnames={`card--${i}`} image={
					window.innerWidth <= 500 ? (
						<svg width={50} height={50} className='vision-card__image'>
							<use href={card.image} />
						</svg>) : (
						<svg className='vision-card__image'>
							<use href={card.image} />
						</svg>)
                } title={card.title} description={card.description} />
            </React.Fragment>;
        })}

    </div>;
};

export default VisionCards;
