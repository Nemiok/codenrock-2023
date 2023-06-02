import React from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { ColorModeContext } from '../color-mode-context-provider/color-mode-context-provider';

// перенести в sidebar или header когда будет готов дизайн или раньше
function ChangeThemeBtn() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const matchesMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <IconButton sx={{ ml: matchesMediumScreen ? 1 : 'auto' }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ChangeThemeBtn
