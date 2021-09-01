import '../styles/globals.css'
import 'antd/dist/antd.css'
import MyLayout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}

export default MyApp
