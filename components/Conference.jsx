import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";
import styled from 'styled-components'

function Conference() {
  const peers = useHMSStore(selectPeers);

  return (
    <Root className="conference-section">
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </Root>
  );
}

export default Conference;

const Root=styled.div`

`