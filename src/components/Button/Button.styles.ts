import { createUseStyles } from "react-jss";

const useButtonStyles = createUseStyles({
	root: {
		height: '100%',
		width: 192,
		backgroundColor: "#FFCB47",
		color: "#FFFFFF",
		fontSize: 16,
		border: 'none',
		padding: [0, 16],
		boxShadow: "10px 10px 30px rgba(255, 203, 71, 0.3)",
		"&:hover": {
			cursor: "pointer",
		}
	},
})

export default useButtonStyles;
