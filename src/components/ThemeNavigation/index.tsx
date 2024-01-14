import * as React from 'react';
import { Button, ButtonGroup, Grow, Paper, Popper, MenuItem, MenuList } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { cyan, green, lightBlue, lightGreen, orange, yellow } from '@mui/material/colors';

import { MUIWrapperContext } from '../MUIWrapper';

export const options: any = [
  {
    name: 'Default',
    palette: { primary: { main: "#1976d2" }, secondary: { main: "#9c27b0" } },
  },
  {
    name: 'Forest',
    palette: { primary: { main: green[600] }, secondary: { main: lightGreen[400] } },
  },
  {
    name: 'Ocean',
    palette: { primary: { main: cyan[600] }, secondary: { main: lightBlue[400] } },
  },
  {
    name: 'Corporate',
    palette: { primary: { main: lightBlue[600] }, secondary: { main: cyan[400] } },
  },
  {
    name: 'Sunset',
    palette: { primary: { main: orange[600] }, secondary: { main: yellow[400] } },
  },
]

const ThemeNavigation = () => {
  const { updateTheme } = React.useContext(MUIWrapperContext);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (option: { [Key: string]: any }, index: number) => {
    updateTheme(option);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">

        <Button>{options[selectedIndex]?.name}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {
                    options.map((option: any, index: number) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(option, index)}
                      >
                        {option?.name}
                      </MenuItem>
                    ))
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

    </React.Fragment>
  );
}

export default ThemeNavigation;
