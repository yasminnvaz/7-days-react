import logo from '../../assets/logo.svg';
import useMenuStyles from './Menu.styles';

type MenuProps = {
	items: Array<string>;
}

const Menu = ({ items }: MenuProps) => {
	const classes = useMenuStyles();

	return (
		<div className={classes.root}>
			<img src={logo} className={classes.logo} alt="logo" />
			<ul className={classes.menu}>
				{items &&
					items.map((item, index) => {
						return <li key={index} className={classes.item}>{item}</li>
					})}
			</ul>
		</div>
	);
}

export default Menu;