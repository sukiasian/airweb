import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../redux/reducers/rootReducer';
import BlueBackground from '../../../hoc/BlueBackground';

const MemberInfo = (): JSX.Element => {
    const { pickedUserInfo } = useSelector((state: ReduxState) => state.teamReducer);

    return pickedUserInfo
        ? <BlueBackground><div className="member-info">
            <img className='member-image' src={pickedUserInfo.image} alt="" />
            <p className='member-story paragraph--large'>{pickedUserInfo.history}</p>
        </div></BlueBackground>
        : null;
};

export default MemberInfo;
