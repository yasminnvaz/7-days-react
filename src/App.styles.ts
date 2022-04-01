import { createUseStyles } from "react-jss";
import bg from './assets/background.svg'

const useAppStyles = createUseStyles({
	root: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: "repeat",
		height: "100vh",
	}
})

export default useAppStyles