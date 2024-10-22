import { TextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";
import { styled } from "styled-components";

interface ITextFieldCustom extends Omit<TextFieldProps, 'variant'> {
  variant?: TextFieldProps['variant'];
  name: string; 
}

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
  },
})

const TextFieldCustom = ({ name, ...props }: ITextFieldCustom) => {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : '';

  return (
    <StyledTextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
      inputProps={{ style: { color: 'white' } }}
    />
  );
};

export default TextFieldCustom;
