import {Unna } from 'next/font/google'
import './globals.css'
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
const unna = Unna({ weight:['400', '700'], subsets: ["latin"] })

export const metadata = {
  title: 'Preethi Indian Cuisine',
  description: 'Authentic South and North Indian Cuisine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/preethi.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={unna.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
