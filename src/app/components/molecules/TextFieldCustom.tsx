import { TextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";

interface ITextFieldCustom extends Omit<TextFieldProps, 'variant'> {
  variant?: TextFieldProps['variant'];
  name: string; 
}

const TextFieldCustom = ({ name, ...props }: ITextFieldCustom) => {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : '';

  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default TextFieldCustom;
