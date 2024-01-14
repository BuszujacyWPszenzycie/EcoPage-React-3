import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { NAV_ITEMS } from '../data/ALL_DATA'
import NavItem from './NavItem'

export default function NavDesktop({ children }) {
	return (
		<nav className='nav nav__desktop'>
			<div className='nav__desktop--wrapper'>
				<a href='#' className='nav__desktop--link'>
					<FontAwesomeIcon icon={faLeaf} className='nav__desktop--icon' />
				</a>
				<p className='nav__desktop--text'>
					<span className='nav__desktop--span'>Be</span>Eco
				</p>
			</div>
			<div className='nav__desktop--items'>
				<NavItem href='#about' className='nav__desktop--item'>
					{NAV_ITEMS[0]}
				</NavItem>
				<NavItem href='#segregate' className='nav__desktop--item'>
					{NAV_ITEMS[1]}
				</NavItem>
				<NavItem href='#search' className='nav__desktop--item'>
					{NAV_ITEMS[2]}
				</NavItem>
				<NavItem href='#contact' className='nav__desktop--item'>
					{NAV_ITEMS[3]}
				</NavItem>
			</div>
		</nav>
	)
}
