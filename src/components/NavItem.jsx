export default function NavItem({ children, href, className }) {
	return (
		<a href={href} className={className}>
			{children}
		</a>
	)
}
