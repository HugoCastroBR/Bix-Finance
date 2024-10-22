import theme from '@/app/theme';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',  
  alignItems: 'center',      
  backgroundColor: theme.palette.primary.dark, 
  color: 'white',
  height: '100px',
  position: 'relative',
  bottom: '0',
  width: '100%',
  padding: '16px',
  marginTop:'60px'
});


const Footer = () => {
  return (
    <FooterContainer>
      <Typography  variant="h5">
        &copy; {new Date().getFullYear()}
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
