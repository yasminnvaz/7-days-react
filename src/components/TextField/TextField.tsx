import useTextFieldStyles from './TextField.styles';

type TextFieldProps = {
	placeholder: string;
	type: React.HTMLInputTypeAttribute
}

const TextField = ({ placeholder, type = "text" }: TextFieldProps) => {
	const { input } = useTextFieldStyles();

	return (
		<input
			className={input}
			placeholder={placeholder}
			type={type}
		/>
	);
}

export default TextField;