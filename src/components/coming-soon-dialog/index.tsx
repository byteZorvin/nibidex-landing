'use client';

import { Dialog, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { comingSoonDialogContext } from '../providers';
import RocketLaunchIcon from '@/assets/launching-soon-icon.png';
import Image from 'next/image';

const ComingSoonDialog = () => {
  const { comingSoonDialogOpen, setComingSoonDialogOpen } = useContext(
    comingSoonDialogContext
  );
  const onClose = () => {
    setComingSoonDialogOpen(false);
  };
  return (
    <Dialog
      open={comingSoonDialogOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '20px'
        }
      }}
    >
      <Grid
        p='40px 60px'
        sx={{
          background: 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexDirection: 'column'
        }}
      >
        <Image
          src={RocketLaunchIcon}
          alt='launching soon'
          style={{
            width: '150px',
            height: '150px'
          }}
        />
        <Typography
          sx={theme => ({
            fontSize: '40px',
            lineHeight: '44px',
            color: theme.palette.grey[600],
            textTransform: 'uppercase',
            fontWeight: '700',
            letterSpacing: '3px'
          })}
        >
          Launching soon!
        </Typography>
      </Grid>
    </Dialog>
  );
};

export default ComingSoonDialog;
