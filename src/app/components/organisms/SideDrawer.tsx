'use client';
import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Close, Menu, Logout, Home } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import theme from '@/app/theme';
import { useRouter } from 'next/navigation';
import { RegisteredUser } from '@/app/utils/types';

const drawerWidth = 320;

const openedMixin = (theme: Theme): CSSObject => ({

  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border: "none"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `0`,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: "none"
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.secondary.main,
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})(({ theme }) => ({
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
  paddingTop: 20,
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

  const router = useRouter();
  
  const user = sessionStorage.getItem('loggedInUser');

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
    onDrawerToggle(!isOpen);
  };

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: 50,
          height: 50,
          borderRadius: 2,
          top: 4,
          left: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.secondary.main
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ marginRight: '5px' }}
        >
          {isOpen
            ?
            <Close
              style={{
                color: theme.palette.primary.light
              }}
            />
            :
            <Menu
              style={{
                color: theme.palette.primary.light
              }}
            />}
        </IconButton>
      </Box>
      <Drawer
        variant="permanent"
        open={isOpen}
      >
        <DrawerHeader>
          <Typography
            color="primary"
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'start',
              width: '80%',
              height: '100%',
              marginRight: '80px',
              overflow: 'hidden'
            }}
          >
            Hi, {user ? (JSON.parse(user) as RegisteredUser).name : 'User'}
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ marginRight: '6px' }}
          >
            
            {isOpen
              ?
              <Close
                style={{
                  color: theme.palette.primary.light
                }}
              />
              :
              <Menu
                style={{
                  color: theme.palette.primary.light
                }}
              />}
          </IconButton>
        </DrawerHeader>
        <Divider
          sx={{
            backgroundColor: 'white'
          }}
        />
        <OptionsList>
          <OptionBox
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
          >
            <OptionText>
              Home
            </OptionText>
            <Home />
          </OptionBox>
          <OptionBox
            onClick={() => {
              if (typeof window !== 'undefined') {
                sessionStorage.removeItem('loggedInUser'); 
                router.push('/auth/login'); 
              }
            }}
          >
            <OptionText>
              LOGOUT
            </OptionText>
            <Logout />
          </OptionBox>
        </OptionsList>
      </Drawer>
    </>

  )
}

export default SideDrawer;