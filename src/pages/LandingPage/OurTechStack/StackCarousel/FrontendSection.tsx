import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';

const FrontendSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.FRONTEND ? <div>hiiii</div> : null;
};

export default FrontendSection;
