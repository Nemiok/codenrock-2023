import { Box, SvgIcon } from '@mui/material'
import { AppRoute, VacancyTabNames } from '../../utils/const/const'
import { Link } from 'react-router-dom'
import './styles.css'
import SVG_ICONS from '../../assets/images/svg-icons'
import VacancyTabs from '../vacancy-tabs/vacancy-tabs'

function VacancyHero() {
  return (
    <section className='VacancyPage__HeroSection'>
      <>
        <Box className='VacancyPage__FilterContainer'>
          <Link className='BackToVacanciesLink' to={AppRoute.VacanciesPage}>
            <SvgIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '32px',
                height: '32px',
                transform: 'rotate(90deg)',
                color: 'textColor1.one',

                '& svg path': {
                  stroke: 'currentColor',
                },
              }}
            >
              {SVG_ICONS.ARROW}
            </SvgIcon>
            <span>Все вакансии</span>
          </Link>

          <Box className='VacancyPage__Filter'>
            <VacancyTabs />
          </Box>
        </Box>
      </>
      <div className='VacancyPage__HeroBackground'></div>
    </section>
  );
}

export default VacancyHero
