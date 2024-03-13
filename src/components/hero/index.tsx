import React, { useContext } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import WheatIcon from '@/assets/wheat-icon.svg';

import BottomToTop from '../animation/bottomToTop';
import { comingSoonDialogContext } from '../providers';

const HeroSection = () => {
  const { setComingSoonDialogOpen } = useContext(comingSoonDialogContext);

  return (
    <Stack direction={'column'} alignItems={'center'} spacing={5}>
      <BottomToTop>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '36px', md: '48px' },
            fontWeight: '600',
            padding: { md: '0px 80px' }
          }}
        >
          Trade smarter, trade faster - NibiDEX at your fingertips!
        </Typography>
      </BottomToTop>

      <BottomToTop delay={450}>
        <Typography
          variant='subtitle1'
          sx={{
            textAlign: 'center',
            fontSize: { xs: '24px' }
          }}
        >
          Unlocking the Full Potential of DeFi with Nibiru Chain
        </Typography>
      </BottomToTop>

      <BottomToTop delay={450}>
        <Button
          variant='contained'
          sx={{
            p: '28px 44px',
            borderRadius: '28px',
            fontWeight: '600',
            fontSize: '16px'
          }}
          onClick={() => setComingSoonDialogOpen(true)}
        >
          Launch App
        </Button>
      </BottomToTop>

      <BottomToTop
        delay={450}
        sx={{
          mt: '70px !important'
        }}
      >
        <Image alt='icon' src={WheatIcon} />
      </BottomToTop>

      {/* <BottomToTop
        delay={450}
        sx={{
          width: '100%'
        }}
      >
        <Grid
          container
          justifyContent={'space-between'}
          rowSpacing={4}
          my='-20px'
        >
          <Grid item md={3} xs={6}>
            <Typography
              color='primary'
              fontWeight='600'
              fontSize={'40px'}
              textAlign={'center'}
            >
              $12M+
            </Typography>
            <Typography textAlign='center' color='gray' fontWeight={'600'}>
              Total Value Locked
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              color='primary'
              fontWeight='600'
              fontSize={'40px'}
              textAlign={'center'}
            >
              $200M+
            </Typography>
            <Typography textAlign='center' color='gray' fontWeight={'600'}>
              Total Trading Locked
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              color='primary'
              fontWeight='600'
              fontSize={'40px'}
              textAlign={'center'}
            >
              500+
            </Typography>
            <Typography textAlign='center' color='gray' fontWeight={'600'}>
              Contributors
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              color='primary'
              fontWeight='600'
              fontSize={'40px'}
              textAlign={'center'}
            >
              80,000+
            </Typography>
            <Typography textAlign='center' color='gray' fontWeight={'600'}>
              Community Members
            </Typography>
          </Grid>
        </Grid>
      </BottomToTop> */}
    </Stack>
  );
};

export default HeroSection;
