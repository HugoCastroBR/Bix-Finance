import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderTitle from '../atoms/HeaderTitle';
import HeaderMenu from '../atoms/HeaderMenu';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  paddingTop: 24,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 50,
  },
}));

const DashBoardHeader = ({
  dashboard,
}: {
  dashboard?: boolean
}) => (
  <HeaderContainer>
    <HeaderTitle />
    <HeaderMenu dashboard={dashboard} />
  </HeaderContainer>
);

export default DashBoardHeader;
