'use client';

import { Dialog, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { comingSoonDialogContext } from '../providers';

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
          background: 'transparent',
          boxShadow: 'none'
        }
      }}
    >
      <Grid>
        <Typography variant='h3'>Launching soon!</Typography>
      </Grid>
    </Dialog>
  );
};

export default ComingSoonDialog;
