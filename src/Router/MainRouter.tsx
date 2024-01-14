import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'

const MainRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />}>
				{' '}
			</Route>
			<Route path='/start' element={<LandingPage />}>
				{' '}
			</Route>
		</Routes>
	)
}

export default MainRouter
