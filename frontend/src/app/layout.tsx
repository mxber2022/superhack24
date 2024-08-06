import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import Web3ModalProvider from '@/context'
import ApolloProviderWrapper from './lib/ApolloProviderWrapper'

export const metadata: Metadata = {
  title: 'BET BAZAR',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>
          <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}