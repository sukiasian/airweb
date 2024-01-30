import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
import ScrollToTop from '../hoc/ScrollToTop'

const MainRouter = (): JSX.Element => {
	return (
		<ScrollToTop> 
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/start' element={<LandingPage />} />
				<Route path='/policy' element={<PrivacyPolicyPage />} />
			</Routes>
		</ScrollToTop>
	)
}

export default MainRouter
