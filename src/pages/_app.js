import '@/styles/globals.css'
import '../config/firebase.config'
import { AuthProvider } from '@/hook/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'

export default function App({ Component,
  pageProps }) {

  return <Component {...pageProps} />
  //   <AuthProvider>

  //     <AuthStateChanged>
  //       <Component {...pageProps} />
  //     </AuthStateChanged>


  //   </AuthProvider>
  // )



}
