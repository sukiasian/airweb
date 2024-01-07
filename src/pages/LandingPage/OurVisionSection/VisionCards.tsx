import '../../../assets/images/vision-cards/rocket.svg';
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
            image: '#rocket',
            title: 'Transformative solutions',
            description: 'We aspire to be the driving force behind transformative solutions, setting new benchmarks for innovation, efficiency, and user experience.'
        },
        {
            image: '#rocket',
            title: 'Business oriented passion',
            description: 'By combining our passion for technology with an unwavering commitment to excellence, we strive to be the trusted partner for businesses seeking to harness the full potential of digital innovation.'
        }
    ];

    return <div className="vision-cards margin-top-large">
        {visionPoints.map((card, i) => {
            return <React.Fragment key={i}>
                <WhiteCard image={<div style={{
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'center'
                }}> <svg width={200}>
                        <use className='vision-card__image' href={card.image} />
                    </svg></div>
                } title={card.title} description={card.description} />
            </React.Fragment>;
        })}

    </div>;
};

export default VisionCards;
