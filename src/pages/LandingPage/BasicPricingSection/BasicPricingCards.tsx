import { Fragment } from 'react';
import NeonCard from '../../../components/cards/NeonCard';

const BasicPricingCards = (): JSX.Element => {
    // const pathToServicesImages = '../../assets/images/services/';

    const pricingOptions = [
        {
            name: 'Landing Pages',
            image: 99
        },
        {
            name: 'Web Apps',
            price: 390
        },
        {
            name: 'Mobile Apps',
            price: 490
        }
    ];

    return <div className='our-services__cards'>
        {pricingOptions.map((option, i) => {
            return <Fragment key={i}>
                <NeonCard>
                    <h2 className='heading heading--secondary'>{option.name}</h2>
                    <p className='paragraph paragraph--small paragraph--bold'>Starting from</p>
                    <p className='paragraph paragraph--small'>${option.price}</p>
                </NeonCard>
            </Fragment>;
        })}
    </div>;
};

export default BasicPricingCards;
