import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { HeadComponent } from '../containers/head/Head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <HeadComponent title={null}/>
    <Component {...pageProps} />
  </>)
}
