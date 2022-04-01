import { createUseStyles } from "react-jss";

const useMenuStyles = createUseStyles({
	root: {
		height: 48,
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	menu: {
		display: 'flex',
		gap: 16,
		margin: 0,
		padding: 0,
		alignItems: 'flex-end',
		fontSize: 16,
	},
	logo: {
		height: 40
	},
	item: {
		listStyleType: 'none',
		'&:after': {
			content: '"/"',
			marginLeft: 12,
		},
		'&:last-child:after': {
			content: '""'
		}
	}
})

export default useMenuStyles;
