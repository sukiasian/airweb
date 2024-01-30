import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';
import '../../../../assets/images/stack/backend/node-js.svg'
import '../../../../assets/images/stack/backend/python.svg'
import '../../../../assets/images/stack/backend/spring.svg'
import '../../../../assets/images/stack/backend/postgresql.svg'
import '../../../../assets/images/stack/backend/mysql.svg'
import '../../../../assets/images/stack/backend/mongodb.svg'
import '../../../../assets/images/stack/backend/redis.svg'
import '../../../../assets/images/stack/backend/kafka.svg'
import '../../../../assets/images/stack/backend/java.svg'
import '../../../../assets/images/stack/backend/nestjs.svg'

const BackendSection = (): JSX.Element => {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.BACKEND ? <div className='stack backend-stack'>
		<div className='backend-stack__node'>
			<svg><use href='#node-js' /></svg>
		</div>
		<div className='backend-stack__nestjs'>
			<svg><use href='#nestjs' /></svg>
		</div>
		<div className='backend-stack__python'>
			<svg><use href='#python' /></svg>
		</div>
		<div className='backend-stack__spring'>
			<svg><use href='#spring' /></svg>
		</div>
		<div className='backend-stack__postgresql'>
			<svg><use href='#postgresql' /></svg>
		</div>
		<div className='backend-stack__mysql'>
			<svg><use href='#mysql' /></svg>
		</div>
		<div className='backend-stack__mongodb'>
			<svg><use href='#mongodb' /></svg>
		</div>
		<div className='backend-stack__redis'>
			<svg><use href='#redis' /></svg>
		</div>
		<div className='backend-stack__kafka'>
			<svg><use href='#kafka' /></svg>
		</div>
		<div className='backend-stack__java'>
			<svg><use href='#java' /></svg>
		</div>
	</div> : null;
};

export default BackendSection;
