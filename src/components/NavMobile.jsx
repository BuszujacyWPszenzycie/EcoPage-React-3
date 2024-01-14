import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import { NAV_ITEMS } from '../data/ALL_DATA'
import { useState } from 'react'

export default function NavMobile({ children }) {
	const [isActive, setIsActive] = useState(false)

	const showMobileNav = () => {
		setIsActive(!isActive)
	}
	return (
		<nav className='nav nav__mobile'>
			<div className='nav__mobile--wrapper'>
				<a href='#' className='nav__mobile--link'>
					<FontAwesomeIcon icon={faLeaf} className='nav__mobile--icon' />
				</a>
				<p className='nav__mobile--text'>
					<span className='nav__mobile--span'>Be</span>Eco
				</p>
			</div>
			<div className='nav__mobile--hamburger'>
				<button
					className={`${isActive ? 'is-active' : undefined} hamburger hamburger--spin`}
					type='button'
					onClick={showMobileNav}
				>
					<span className='hamburger-box'>
						<span className='hamburger-inner'></span>
					</span>
				</button>
			</div>
			<div className={`${isActive ? 'show-mobile-nav' : undefined} nav__mobile--modal`}>
				<NavItem href='#about' className='nav__mobile--item'>
					{NAV_ITEMS[0]}
				</NavItem>
				<NavItem href='#segregate' className='nav__mobile--item'>
					{NAV_ITEMS[1]}
				</NavItem>
				<NavItem href='#search' className='nav__mobile--item'>
					{NAV_ITEMS[2]}
				</NavItem>
				<NavItem href='#contact' className='nav__mobile--item'>
					{NAV_ITEMS[3]}
				</NavItem>
			</div>
		</nav>
	)
}
