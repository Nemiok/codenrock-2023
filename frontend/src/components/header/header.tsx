import React from 'react';
import { AppBar, Box, IconButton, Toolbar, useMediaQuery, useTheme, SvgIcon, Tooltip, ListItemIcon, MenuItem, Menu } from '@mui/material';
import ChangeThemeBtn from '../change-theme-btn/ChangeThemeBtn';
import Navbar from './navbar/navbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import SVG_ICONS from '../../assets/images/svg-icons';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AuthorizationStatus } from '../../utils/const/const';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutAction } from '../../redux-store/api-actions';

function Header() {
  const theme = useTheme();
  const authStatus = useAppSelector(state => state.USER.authorizationStatus)
  const matchesMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(logoutAction())
  }

  const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          boxShadow: 'none',
          padding: '18px auto',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: '0 !important',
            width: 'calc(100% - 160px)',
            margin: '0 auto',
            gap: '40px',
          }}
        >
          {matchesMediumScreen ? null : (
            <Link to='/'>
              <SvgIcon
                inheritViewBox
                sx={{
                  width: '162px',
                  height: '32px',
                  color: 'icons.primary',

                  '& svg path:not(:last-of-type)': {
                    fill: 'currentColor'
                  }
                }}
              >
                {SVG_ICONS.APP_LOGO}
              </SvgIcon>
            </Link>
          )}

          {authStatus === AuthorizationStatus.Auth && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'flex-end'
              }}
            >
              <Navbar />
              <ChangeThemeBtn />
              <IconButton
                aria-label='notification'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
              >
                <NotificationsNoneIcon sx={{
                  width: '45px',
                  height: '45px',
                  color: 'icons.primary',
                }} />
              </IconButton>

              <Tooltip title="Профиль">
                <IconButton
                  onClick={handleProfileMenuClick}
                  aria-label='account of current user'
                  color='inherit'
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <AccountCircleOutlinedIcon
                    sx={{
                      width: '45px',
                      height: '45px',
                      color: 'icons.primary',
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleProfileMenuClose}
                onClick={handleProfileMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >

                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  Выход
                </MenuItem>
              </Menu>

            </Box>
          )}
          {authStatus !== AuthorizationStatus.Auth &&
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'flex-end'
              }}
            >
              <ChangeThemeBtn />
            </Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(Header);
