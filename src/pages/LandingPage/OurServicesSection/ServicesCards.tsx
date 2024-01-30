import { Fragment } from 'react';
import NeonCard from '../../../components/cards/NeonCard';

const ServicesCards = (): JSX.Element => {
    const services = [
        {
            name: 'Web Applications',
            image: require('../../../assets/images/services/webapp.png'),
            description: 'Frontend and backend - scalable applications'
        },
        {
            name: 'Mobile Applications',
            image: require('../../../assets/images/services/mobile-application.png'),
            description: 'Native iOS and Android applications'

        },
        {
            name: 'RESTful API',
            image: require('../../../assets/images/services/api.png'),
            description: 'RESTful architecture based APIs'

        },
        {
            name: 'Microservices',
            image: require('../../../assets/images/services/microservice.png'),
            description: 'Enjoy the proficiency of microservices'

        },
        {
            name: 'UX/UI Design',
            image: require('../../../assets/images/services/uxui.png'),
            description: 'Eye-catching web and mobile app interfaces'
        }
    ];

    return <div className='cards our-services__cards margin-top-large'>
        {services.map((service, i) => {
            return <Fragment key={i}>
                <NeonCard>
					<div className='card-container'>
						<img className='service-image' src={service.image} alt='Service' />
						<p className='service-name paragraph paragraph--small'>{service.name}</p>
					 </div>
                </NeonCard>
            </Fragment>;
        })}
    </div>;
};

export default ServicesCards;
