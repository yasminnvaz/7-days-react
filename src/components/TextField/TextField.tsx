import useTextFieldStyles from './TextField.styles';

type TextFieldProps = {
	placeholder: string;
	type: React.HTMLInputTypeAttribute
}

const TextField = ({ placeholder, type = "text" }: TextFieldProps) => {
	const classes = useTextFieldStyles();

	return (
		<input
			className={classes.root}
			placeholder={placeholder}
			type={type}
		/>
	);
}

export default TextField;