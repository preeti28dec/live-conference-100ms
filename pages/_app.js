import { HMSRoomProvider } from "@100mslive/react-sdk";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <HMSRoomProvider>
      <Component {...pageProps} />
    </HMSRoomProvider>
  );
}

export default MyApp;
