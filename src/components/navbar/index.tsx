'use client';

import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './toggleColorMode';
import NibiLogo from '@/assets/nibi-logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { comingSoonDialogContext } from '../providers';

const logoStyle = {
  width: '50px',
  height: 'auto',
  cursor: 'pointer'
};

function Navbar() {
  const router = useRouter();
  const { setComingSoonDialogOpen } = React.useContext(comingSoonDialogContext);

  return (
    <AppBar
      position='fixed'
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        my: 2
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          variant='regular'
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px #319824b3, 1px 1.5px 2px -1px #31982442, 4px 4px 12px -2.5px #31982428'
          })}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 0
            }}
            onClick={() => router.push('/')}
          >
            <Image src={NibiLogo} alt='logo of NibiDEX' style={logoStyle} />
            <Typography
              sx={theme => ({
                background: `linear-gradient(to right, ${theme.palette.primary[400]}, ${theme.palette.primary[600]})`,
                color: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
                fontSize: '22px',
                ml: '10px'
              })}
            >
              NibiDEX
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center'
            }}
          >
            {/* <ToggleColorMode /> */}

            <Button
              color='primary'
              variant='contained'
              size='small'
              sx={{
                borderRadius: '15px',
                padding: '5px 15px'
              }}
              onClick={() => setComingSoonDialogOpen(true)}
            >
              Launch app
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
