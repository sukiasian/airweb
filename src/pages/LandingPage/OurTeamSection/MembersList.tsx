import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveMemberInfo } from '../../../redux/actions/teamActions';

interface MembersListProps {
    teammates: Array<{ image: string, history: string, name: string }>
}

const MembersList = ({ teammates }: MembersListProps): JSX.Element => {
    const [activeMateId, setActiveMateId] = useState(0);

    const dispatch = useDispatch();

    return <div className='our-team__members margin-top-large'>
        {teammates.map((mate, i) => {
            return <Fragment key={i}>
                {/* {activeMateId === i ? <p className='paragraph paragraph--small paragraph--bold'> {mate.role} </p> : null} */}

                <p className={`paragraph paragraph--large ${activeMateId === i ? 'active' : ''}`} onClick={() => {
                    dispatch(setActiveMemberInfo({
                        image: mate.image, history: mate.history
                    }));

                    setActiveMateId(i);
                }}>{mate.name}</p>
            </Fragment>;
        })}
    </div>;
};

export default MembersList;
