import { createUseStyles } from "react-jss";

const useTextFieldStyles = createUseStyles({
	root: {
		height: '100%',
		flex: 1,
		border: 'none',
		padding: [32, 16],
		borderRadius: 0,
		boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.06)",
		"&::placeholder": {
			color: "#202020",
			opacity: 0.3,
			fontsize: 16,
		}
	},
})

export default useTextFieldStyles;
