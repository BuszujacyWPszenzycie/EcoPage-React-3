import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

export default function Header({ children }) {
	return (
		<header className='header'>
			<NavMobile></NavMobile>
			<NavDesktop></NavDesktop>
		</header>
	)
}
