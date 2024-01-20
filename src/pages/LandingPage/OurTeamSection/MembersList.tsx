import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveMemberInfo } from '../../../redux/actions/teamActions';

interface TeamMate {
	image: string; 
	history: string; 
	name: string;
	role?: string;
}

interface MembersListProps {
    teammates: Array<TeamMate>;
}

const MembersList = ({ teammates }: MembersListProps): JSX.Element => {
    const [activeMateId, setActiveMateId] = useState(0);
	const [roleOffset, setRoleOffset] = useState<{ left: number, top: number}>({ left: 0, top: 0});

	const roleRef = useRef(null);

    const dispatch = useDispatch();

	const setActiveMate = (mate: TeamMate, i: number): () => void => { 
		return () => { 
			dispatch(setActiveMemberInfo({
				image: mate.image, history: mate.history
			}));
			
			setActiveMateId(i);
		}
	}

	const getActiveMemberOffset = () => { 
		const activeMember = (document.querySelector('.our-team__members .active') as HTMLElement);

		return { left: activeMember.offsetLeft, top: activeMember.offsetTop };	
	}

	useEffect(() => { 
		setRoleOffset(getActiveMemberOffset());		
	}, [])

	
	
	useEffect(() => { 
		console.log(getActiveMemberOffset());
		if(roleOffset.left !== 0) {
			const { left, top } = getActiveMemberOffset(); 

			setRoleOffset({ left: left + 136, top: top + 136});
		}
	}, [activeMateId])

    return (
			<div className='our-team__members margin-top-large'>
        		{teammates.map((mate, i) => {
					const active = activeMateId === i;

            		return (
						<div className='teammate' key={i}>
							<p ref={roleRef} id='teammate-role' className='paragraph paragraph--light' style={{ visibility: active ? 'visible' : 'hidden' }}>{teammates[i].role}</p>
							<div>
                				<p className={`paragraph paragraph--large ${active ? 'active' : ''}`} onClick={setActiveMate(mate, i)}>{mate.name}</p>
							</div>
            			</div>
					);
        		})}
			</div>
	)
};

export default MembersList;
