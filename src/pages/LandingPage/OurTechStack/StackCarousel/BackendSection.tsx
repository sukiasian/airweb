import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';

const BackendSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.BACKEND ? <div>hiiii</div> : null;
};

export default BackendSection;
