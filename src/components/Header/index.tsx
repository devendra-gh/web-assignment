import * as React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import { Box, Avatar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import { useUserData } from '../../redux/storeConfig/states';
import { drawerWidth } from '../../utility/constant';
import { handleLogout } from '../../redux/actions';

const ToggleMode = React.lazy(() => import('../../components/ToggleMode'))

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header = ({ open, toggleDrawer }: { [Key: string]: any }) => {
    const dispatch = useDispatch<any>();
    const user = useUserData();
    const auth = user?.auth || ""

    const onHandleLogout = () => {
        dispatch(handleLogout());
    }

    return (
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px'
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    <FormattedMessage id="dashboard" />
                </Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={Math.floor(Math.random() * 11)} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Box ml={1}><ToggleMode /></Box>
                <Box ml={1}><IconButton onClick={onHandleLogout} color="inherit"><LogoutIcon /></IconButton></Box>
                <Box ml={1} textTransform="uppercase" title={auth?.email}><Avatar>{auth?.email?.charAt(0) || "-"}</Avatar></Box>
            </Toolbar>
        </AppBar >
    );
}

export default Header;