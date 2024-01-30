import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';
import '../../../../assets/images/stack/frontend/react.svg'
import '../../../../assets/images/stack/frontend/vue.svg'
import '../../../../assets/images/stack/frontend/angular.svg'
import '../../../../assets/images/stack/frontend/sass.svg'

const FrontendSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.FRONTEND ? <div className='stack frontend-stack'>
		<div className='frontend-stack__react'>
			<svg> 
				<use href='#react'/>
			</svg>
		</div>
		<div className='frontend-stack__vue'>
			<svg> 
				<use href='#vue'/>
			</svg>
		</div>
		<div className='frontend-stack__angular'>
			<svg> 
				<use href='#angular'/>
			</svg>
		</div>
		<div className='frontend-stack__sass'>
			<svg> 
				<use href='#sass'/>
			</svg>
		</div>
	</div> : null;
};

export default FrontendSection;
