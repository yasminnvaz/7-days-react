import logo from '../../assets/logo.svg';
import useMenuStyles from './Menu.styles';

type MenuProps = {
	items: Array<string>;
}

const Menu = ({ items }: MenuProps) => {
	const { menu } = useMenuStyles();

	return (
		<header className={menu}>
			<img src={logo} alt="logo" />
			<nav>
				<ul>
					{items &&
						items.map((item, index) => {
							return <li key={index}>
								<a href="/">{item}</a>
							</li>
						})}
				</ul>
			</nav>
		</header>
	);
}

export default Menu;