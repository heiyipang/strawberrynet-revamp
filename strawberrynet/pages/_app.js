import '../styles/globals.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import "antd/dist/antd.css";
// import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return( 
    <>
      {/* <Link href="/about">
        <a>About</a>
      </Link> */}
      {/* <Provider store={store}> */}
        <Component {...pageProps} />
      {/* </Provider> */}
    </>
  )
}

export default MyApp
