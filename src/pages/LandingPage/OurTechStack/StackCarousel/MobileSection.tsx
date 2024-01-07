import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';

const MobileSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.MOBILE ? <div>hiiii</div> : null;
};

export default MobileSection;
