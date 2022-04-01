import useButtonStyles from './Button.styles';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	const classes = useButtonStyles();

	return (
		<button
			className={classes.root}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;