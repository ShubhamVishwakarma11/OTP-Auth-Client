import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import { EmailContextProvider } from '@/context/EmailContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
    <AuthContextProvider>
      <EmailContextProvider>
          <Navbar/>
          <Component {...pageProps} />
      </EmailContextProvider>
    </AuthContextProvider>
  </>)
}
