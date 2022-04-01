import { createUseStyles } from "react-jss";

const useMenuStyles = createUseStyles({
	menu: {
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: 12,
		padding: [0, 16],
		"& img": {
			height: 48
		},
		"& nav": {
			display: 'flex',
			alignItems: 'end',
		},
		"& ul": {
			margin: 0,
			padding: 0,
			display: 'flex',
			gap: 8
		},
		"& li": {
			listStyle: 'none',
			'&:after': {
				content: '"/"',
				marginLeft: 12,
			},
			'&:last-child:after': {
				content: '""'
			},
			"& a": {
				textDecoration: 'none',
				fontWeight: 400,
				fontSize: 16,
				lineHeight: '20px',
				"&:hover": {
					textDecoration: 'underline',
				}
			}
		}
	},
})

export default useMenuStyles;
