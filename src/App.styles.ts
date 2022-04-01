import { createUseStyles } from "react-jss";
import bg from './assets/background.svg'

const useAppStyles = createUseStyles({
	root: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: "repeat",
		height: "100vh",
	},
	newsletter: {
		height: 72,
		display: 'flex',
		justifyContent: 'center',
		marginTop: 40
	},
	display: {
		fontFamily: ['Elsie Swash Caps', 'cursive'],
		fontSize: 80, 
		margin: [12, 0, 24]
	}
})

export default useAppStyles