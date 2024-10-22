import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const MainContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  paddingLeft: 60,
  paddingRight: 0,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 2,
    paddingRight: 2,
  },
}));

export default MainContainer;
