import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import MemberInfo from './MemberInfo';
import MembersList from './MembersList';
import BlackBackground from '../../../hoc/BlackBackground';
import { setActiveMemberInfo } from '../../../redux/actions/teamActions';

const OurTeamSection = (): JSX.Element => {
    const teammates = [
        {
            name: 'Samuel',
            image: require('../../../assets/images/teammates/sam.jpg'),
            role: 'Founder, CEO',
            history: 'Passionate software developer and computer enthusiast, Samuel thrives in the realm of code, where math and statistics become his playground. A former professional sportsman, he brings discipline and dedication to his tech pursuits. Beyond the screen, he finds inspiration in the arts, blending creativity with logical precision. His journey is an ever-evolving fusion of athleticism and algorithm, a testament to the multifaceted world he navigates with joy and expertise.'
        },
        {
            name: 'Armine',
            image: require('../../../assets/images/teammates/armine.jpg'),
            role: 'Product Designer',
            history: 'A visionary designer with an extraordinary culinary flair, Armine transforms spaces and plates alike. From crafting visually stunning designs to effortlessly recreating any restaurant dish, her creativity knows no bounds. Inspired by the beauty of the world and human ingenuity, she weaves elegance into every creation. With an eye for aesthetics and a taste for culinary artistry, she adds a touch of magic to both design and dining, making every moment a celebration of creativity and flavor.'
        },
        {
            name: 'Leo',
            image: require('../../../assets/images/teammates/leonid.jpg'),
            role: 'Fullstack Developer',
            history: 'A true problem solver, Leo thrives on challenges, navigating them with precision and creativity. With an innate capacity to catch onto intricate details seamlessly, Leo is a beacon of intelligence and resourcefulness in any endeavor.'
        },
        {
            name: 'Max',
            image: require('../../../assets/images/teammates/max.jpg'),
            role: 'Frontend Developer',
            history: 'Passionate about frontend development, Max brings his love for beautiful visual design not only to coding but also to life. In his free time, he immerses himself in breakdancing and teaching this style to children. As a result, he has developed a keen sense of visual aesthetics, both in the digital realm and the art of movement!'
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

    return <BlackBackground><section data-scroll-section id='our-team' className='our-team'>
        <SectionHeading right classnames='absolute-right' heading='Our Team' />
        <MembersList teammates={teammates} />
        <MemberInfo />
    </section></BlackBackground>;
};

export default OurTeamSection;
