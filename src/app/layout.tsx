import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import { Box, Paper, Grid } from '@mui/material';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <title>NibiDEX - The AMM for Nibiru Chain</title>
      <head>
        <meta property="og:url" content="https://nibidex.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NibiDEX - The AMM for Nibiru Chain" />
        <meta property="og:description" content="NibiDEX is a Uniswap inspired automated market-maker (AMM) protocol implemented on the Nibiru Ecosystem!" />
        <meta property="og:image" content="https://i.postimg.cc/3xCLxh5r/nibidex-og.jpg" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="nibidex.xyz"/>
        <meta property="twitter:url" content="https://nibidex.xyz/"/>
        <meta name="twitter:title" content="NibiDEX - The AMM for Nibiru Chain"/>
        <meta name="twitter:description" content="NibiDEX is a Uniswap inspired automated market-maker (AMM) protocol implemented on the Nibiru Ecosystem!"/>
        <meta name="twitter:image" content="https://i.postimg.cc/3xCLxh5r/nibidex-og.jpg"/>
      </head>
      <body className={inter.className}>
        <Providers>
          <Paper
            sx={{
              minHeight: '100vh',
              width: '100vw',
              position: 'absolute',
              top: '0px',
              left: '0px',
              background: 'radial-gradient(#4d663c70 1%, transparent)',
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden'
            }}
          >
            <Navbar />
            <Grid flexGrow={1}>{children}</Grid>
            <Footer />
          </Paper>
        </Providers>
      </body>
    </html>
  );
}
