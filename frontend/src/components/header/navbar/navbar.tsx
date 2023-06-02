import { Box, IconButton, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import { AppRoute } from '../../../utils/const/const'
import { NavLink } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import 'styles.css'

function Navbar() {
  const theme = useTheme();
  const matchesMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (matchesMediumScreen) {
    return (
      <IconButton>
        <SvgIcon>
          <MenuOutlinedIcon />
        </SvgIcon>
      </IconButton>
    )
  }

  return (
    <Box sx={{
      display: 'flex',
      columnGap: '32px'
    }}>

      <NavLink className='Navbar__link' to={AppRoute.VacanciesPage}>
        <Typography sx={{
          color: 'text.disabled',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '22px'
        }}>
          Вакансии
        </Typography>
      </NavLink>
      <NavLink className='Navbar__link' to={AppRoute.MainPage}>
        <Typography sx={{
          color: 'text.disabled',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '22px'
        }}>
          База резюме
        </Typography>
      </NavLink>
    </Box>
  )
}

export default Navbar
