import React from 'react';
import { useTheme, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { MUIWrapperContext } from '../MUIWrapper';

const ToggleMode = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(MUIWrapperContext);

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <LightModeIcon fontSize='large' />
      ) : (
        <DarkModeIcon fontSize='large' />
      )}
    </IconButton>
  );
}

export default ToggleMode;
