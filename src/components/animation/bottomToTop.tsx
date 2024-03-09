'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useInView } from 'framer-motion';

const BottomToTop = ({
  children,
  delay = 0,
  sx
}: {
  children: ReactNode;
  delay?: number;
  sx?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [componentInView, setComponentInView] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setComponentInView(inView);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView, delay]);

  return (
    <>
      <Box
        ref={ref}
        sx={{
          transform: componentInView ? 'translateY(0px)' : 'translateY(100px)',
          opacity: componentInView ? 1 : 0,
          transition: 'all 450ms ease-in-out',
          ...sx
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default BottomToTop;
