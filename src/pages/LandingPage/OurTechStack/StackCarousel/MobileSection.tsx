import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';
import '../../../../assets/images/stack/mobile/swift.svg'
import '../../../../assets/images/stack/frontend/react.svg'
import '../../../../assets/images/stack/mobile/kotlin.svg'

const MobileSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.MOBILE ? <div className='stack mobile-stack'>
		<div className='mobile-stack__swift'>
			<svg> 
				<use href='#swift'/>
			</svg>
		</div>
		<div className='mobile-stack__react-native'>
			<svg> 
				<use href='#react'/>
			</svg>
		</div>
		<div className='mobile-stack__kotlin'>
			<svg> 
				<use href='#kotlin'/>
			</svg>
		</div>
	</div> : null;
};

export default MobileSection;
