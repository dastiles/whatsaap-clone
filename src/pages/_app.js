import '@/styles/globals.css'
import '../config/firebase.config'
import { AuthProvider } from '@/hook/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'

export default function App({ Component,
  pageProps }) {
  return (
    <AuthProvider>

      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>


    </AuthProvider>
  )



}
