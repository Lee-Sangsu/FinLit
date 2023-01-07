import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { firebaseApp } from '../utilities/firebaseProvider'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   firebaseApp
  // })
  return <RecoilRoot>
    <Layout />
    <Component {...pageProps} />
    <Analytics />
  </RecoilRoot>
}
