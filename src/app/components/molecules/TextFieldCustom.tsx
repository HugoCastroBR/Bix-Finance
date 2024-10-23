import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextFieldProps, TextField, IconButton } from "@mui/material";
import { useField } from "formik";
import { useState } from "react";
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : '';

  const IconBtn = () => {
    return (
      <IconButton
        aria-label={
          showPassword ? 'hide the password' : 'display the password'
        }
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        onMouseUp={handleMouseUpPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    )
  }

  if (props.type === 'password') {
    return (
      <StyledTextField
        {...props}
        {...field}
        type={showPassword ? 'text' : 'password'}
        helperText={errorText}
        error={!!errorText}
        inputProps={{ style: { color: 'white' } }}
        slotProps={{
          input: {
            endAdornment: <IconBtn />,
          }
        }}
      />
    );
  }

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
