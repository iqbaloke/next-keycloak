import '@/styles/styles.css'
import '@/styles/custom.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
