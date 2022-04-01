import { createUseStyles } from "react-jss";
import IconMail from '../../assets/icon-mail.svg'

const useTextFieldStyles = createUseStyles({
	input: {
		backgroundImage: `url(${IconMail})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "16px center",
		boxShadow: "10px 10px 30px 0px #0000000f",
		padding: [24, 24, 24, 56],
		fontSize: 16,
		fontWeight: 400,
		lineHeight: "20px",
		flex: 1,
		border: 0
	}
})

export default useTextFieldStyles;
