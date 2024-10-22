import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderTitle from '../atoms/HeaderTitle';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: 24,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 50,
  },
}));

const DashBoardHeader = () => (
  <HeaderContainer>
    <HeaderTitle />
  </HeaderContainer>
);

export default DashBoardHeader;
