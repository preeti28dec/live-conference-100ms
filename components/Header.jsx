import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";
  import React from "react";
  
  function Header() {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  
    return (
      <header>
      <h1 className="logo">Live Conference</h1>
        {/* <img
          className="logo"
          src="./logo-removebg-preview.png"
          alt="logo"
        /> */}
        {isConnected && (
          <button
            id="leave-btn"
            className="btn-danger"
            onClick={() => hmsActions.leave()}
          >
            Leave Room
          </button>
        )}
      </header>
    );
  }
  
  export default Header;
  