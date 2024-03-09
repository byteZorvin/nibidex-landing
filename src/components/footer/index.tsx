'use client';

import React from 'react';
import { Box, Grid, IconButton, Stack, Typography, alpha } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NibiLogo from '@/assets/nibi-logo.png';
import XIcon from '@mui/icons-material/X';
import DiscordIconWhite from '@/assets/discord-icon-white.svg';

const logoStyle = {
  width: '60px',
  height: 'auto'
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' ? (
        <Grid
          container
          sx={theme => ({
            p: { xs: '40px 20px', md: '40px 15%' },
            mt: '50px',
            background: `linear-gradient(to right, ${alpha(
              theme.palette.primary[900],
              0.1
            )}, ${alpha(theme.palette.primary[700], 0.2)})`
          })}
          justifyContent={'space-between'}
        >
          <Grid item md={10} xs={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Image src={NibiLogo} alt='logo of nibidex' style={logoStyle} />
              <Typography
                fontWeight={'600'}
                fontSize={'32px'}
                sx={theme => ({
                  background: `linear-gradient(to right, ${theme.palette.primary[400]}, ${theme.palette.primary[600]})`,
                  color: 'transparent',
                  backgroundClip: 'text'
                })}
              >
                NibiDEX
              </Typography>
            </Box>

            <Typography color={'primary'} fontSize={{ xs: '10px', md: '12px' }}>
              ©️ 2024 NibiDEX. All rights reserved.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant='caption'>SOCIAL MEDIA</Typography>
            <Stack direction={'row'} spacing={1}>
              <IconButton
                sx={{
                  aspectRatio: '1 / 1'
                }}
                onClick={() => window.open('https://x.com/nibi_dex')}
              >
                <XIcon />
              </IconButton>
              <IconButton
                sx={{
                  aspectRatio: '1 / 1'
                }}
                onClick={() => window.open('https://discord.gg/fqQveduY')}
              >
                <Image src={DiscordIconWhite} alt='discord-icon' />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Grid p='20px' container justifyContent='space-between'>
          <Stack
            direction={'row'}
            sx={theme => ({
              width: 'fit-content',
              borderRadius: '30px',
              background: `linear-gradient(to right, ${theme.palette.primary[600]}, ${theme.palette.primary[800]})`,
              padding: '0px 10px'
            })}
          >
            <IconButton
              sx={{
                aspectRatio: '1 / 1',
                '&:hover': {
                  background: 'transparent'
                }
              }}
              onClick={() => window.open('https://x.com/nibi_dex')}
            >
              <XIcon />
            </IconButton>
            <IconButton
              sx={{
                aspectRatio: '1 / 1',
                '&:hover': {
                  background: 'transparent'
                }
              }}
              onClick={() => window.open('https://discord.gg/fqQveduY')}
            >
              <Image src={DiscordIconWhite} alt='discord-icon' />
            </IconButton>
          </Stack>
          <Typography
            color='primary'
            alignSelf={{ xs: 'center', sm: 'flex-end' }}
            fontSize='12px'
          >
            123456789 •
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default Footer;
