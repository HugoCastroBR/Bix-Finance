'use client';
import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Close, Menu, Logout } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import theme from '@/app/theme';
const drawerWidth = 320;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border:"none"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border:"none"
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.secondary.main,
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    position: 'absolute',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

//  backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.main} 10%, ${theme.palette.secondary.contrastText} 100%)`,

const OptionsList = styled(Box)({
  backgroundColor: theme.palette.secondary.main,
  width: '100%',
  padding: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
});

const OptionBox = styled(Button)({
  display: 'flex',
  width: '100%',
  justifyContent: 'end',
  alignItems: 'center',
  padding: 10,
  paddingRight: 20,
});

const OptionText = styled(Typography)({
  color: 'white',
  fontSize: 16,
  marginRight: 24,
})

interface ISideDrawerProps {
  onDrawerToggle: (isOpen: boolean) => void;
}

const SideDrawer = ({
  onDrawerToggle,
}: ISideDrawerProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
    onDrawerToggle(!isOpen);
  };

  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {isOpen ?
            <Close
              fontSize='large'
            /> :
            <Menu
              fontSize='large'
            />}
        </IconButton>
      </DrawerHeader>
      <Divider 
        sx={{
          backgroundColor: 'white'
        }}
      />
      <OptionsList>
        <OptionBox>
          <OptionText>
            LOGOUT
          </OptionText>
          <Logout />
        </OptionBox>
      </OptionsList>
    </Drawer>
  )
}

export default SideDrawer;