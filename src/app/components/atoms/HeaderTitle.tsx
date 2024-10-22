import React from 'react';
import { Typography } from '@mui/material';
import theme from '@/app/theme';

const HeaderTitle = () => (
  <Typography
    variant="h1"
    fontSize={38}
    fontWeight={400}
    color={theme.palette.secondary.main}
  >
    Dashboard
  </Typography>
);

export default HeaderTitle;
