'use client';

import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import ComposableIcon from '@/assets/composable.png';
import PermissionLessIcon from '@/assets/permissionless.png';
import CheapIcon from '@/assets/cheap.png';
import FastIcon from '@/assets/fast.png';
import HeroSection from '@/components/hero';
import BottomToTop from '@/components/animation/bottomToTop';
import { useRouter } from 'next/navigation';
import ComingSoonDialog from '@/components/coming-soon-dialog';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (window && window?.location.hostname.split('.')[0] === 'app') {
      router.push('/trade');
    }
  }, [router]);

  return (
    <Grid
      sx={{
        p: { xs: '0px 10px', md: '0px 15%' }
      }}
      mt={{ xs: '40%', sm: '30%', md: '14%' }}
    >
      <ComingSoonDialog />
      <HeroSection />

      <BottomToTop
        delay={450}
        sx={{
          width: '100%',
          my: '100px'
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '36px', md: '48px' },
            fontWeight: '600',
            mb: '24px'
          }}
        >
          Why NibiDEX?
        </Typography>
        <Grid container justifyContent={'space-between'} rowSpacing={4}>
          <Grid item xs={6} md={3} textAlign={'center'}>
            <Image src={ComposableIcon} alt='composable icon' />
            <Typography
              textAlign='center'
              color='gray'
              fontWeight={'600'}
              mt='12px'
            >
              Composable
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} textAlign={'center'}>
            <Image src={PermissionLessIcon} alt='permissionless icon' />
            <Typography
              textAlign='center'
              color='gray'
              fontWeight={'600'}
              mt='12px'
            >
              Permissionless
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} textAlign={'center'}>
            <Image src={CheapIcon} alt='cheap icon' />
            <Typography
              textAlign='center'
              color='gray'
              fontWeight={'600'}
              mt='12px'
            >
              Cheap
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} textAlign={'center'}>
            <Image src={FastIcon} alt='fast icon' />
            <Typography
              textAlign='center'
              color='gray'
              fontWeight={'600'}
              mt='12px'
            >
              Fast
            </Typography>
          </Grid>
        </Grid>
      </BottomToTop>
    </Grid>
  );
}
