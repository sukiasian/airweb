import { useEffect } from 'react';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import MemberInfo from './MemberInfo';
import MembersList from './MembersList';
import { useDispatch } from 'react-redux';
import { setActiveMemberInfo } from '../../../redux/actions/teamActions';

const OurTeamSection = (): JSX.Element => {
    const teammates = [
        {
            name: 'Samuel',
            image: require('../../../assets/images/teammates/sam.jpg'),
            role: 'Founder, CEO',
            history: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which'
        },
        {
            name: 'Armine',
            image: require('../../../assets/images/teammates/armine.jpg'),
            role: 'Graphic Designer',
            history: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which'
        },
        {
            name: 'Leo',
            image: require('../../../assets/images/teammates/leonid.jpg'),
            role: 'Fullstack Developer',
            history: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which'
        },
        {
            name: 'Max',
            image: require('../../../assets/images/teammates/sam.jpg'),
            role: 'Frontend Developer',
            history: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which'
        }
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveMemberInfo({
            image: teammates[0].image, history: teammates[0].history
        }));

        return () => {
            dispatch(setActiveMemberInfo(null));
        };
    }, []);

    return <section id='our-team' className='our-team'>
        <SectionHeading right classnames='absolute-right' heading='Our Team' />
        <MembersList teammates={teammates} />
        <MemberInfo />
    </section>;
};

export default OurTeamSection;
