import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabIndex } from '../../../../redux/actions/stackCarouselActions';
import FrontendSection from './FrontendSection';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import MobileSection from './MobileSection';
import BackendSection from './BackendSection';

const StackCarousel = (): JSX.Element => {
    const developmentSections = ['Frontend', 'Backend', 'Mobile', 'UX/UI'];

    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(((prevActiveTab) => setActiveTabIndex((prevActiveTab as number + 1) % developmentSections.length))());
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div className='stack-carousel'>
        <div className="dev-sections">
            <ul className='dev-sections__list'>
                {developmentSections.map((section, i) => <li className={`dev-section dev-section__${section} ${activeTab === i ? 'active' : ''}`} key={i}>{section}</li>)}
            </ul>
        </div>

        <FrontendSection />
        <BackendSection />
        <MobileSection />
    </div>;
};

export default StackCarousel;
