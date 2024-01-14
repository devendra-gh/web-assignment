import * as React from 'react';
import { PulseLoader } from "react-spinners";
import { Box, Backdrop } from "@mui/material";

const Loader = ({ enable, backdrop }: { [Key: string]: boolean }) => {
  if (enable && backdrop) {
    return (
      <Backdrop open={enable} style={{ zIndex: "9999" }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <PulseLoader color="#36d7b7" />
        </Box>
      </Backdrop>
    );
  }

  if (enable && !backdrop) {
    return (
      <Box zIndex="9999" justifyContent="center" alignItems="center">
        <PulseLoader color="#36d7b7" />
      </Box>
    )
  }

  return null;
};

Loader.defaultProps = {
  enable: false,
  backdrop: true
}

export default Loader;
