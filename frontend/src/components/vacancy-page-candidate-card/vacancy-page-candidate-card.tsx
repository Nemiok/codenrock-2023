import React from 'react'
import { Box, Typography } from '@mui/material'
import './styles.css'
import mockimage from '../../assets/images/mockcardimage.jpg'
import formatNumber from '../../utils/functions/formatNumber'

function VacancyPageCandidateCard() {
  return (

    <li className='VacancyPage__CandidateCardItem'>
      <Box className='VacancyPage__CandidateCardContainer' sx={{
        backgroundColor: 'background1.one'
      }}>

        <div className='VacancyPage__CandidateAvatar'>
          <img src={mockimage} alt="candidate_avatar" />
        </div>

        <Typography className='VacancyPage__CandidateCardJob' sx={{
          color: 'everBlackText.one'
        }}>
          Java Developer
        </Typography>

        <Typography className='VacancyPage__CandidateCardSalary' sx={{
          color: 'everDisabledTextColor.one'
        }}>
          {`${formatNumber(200000)} ₽`}
        </Typography>

        <ul className='VacancyPage__CandidateCardCriteriaList'>
          <li><Typography className='VacancyPage__CandidateCardCriteriaItem' sx={{
            color: 'everBlackText.one'
          }}>65 лет</Typography></li>
          <li><Typography className='VacancyPage__CandidateCardCriteriaItem' sx={{
            color: 'everBlackText.one'
          }}>Мужчина</Typography></li>
          <li><Typography className='VacancyPage__CandidateCardCriteriaItem' sx={{
            color: 'everBlackText.one'
          }}>стаж 30 лет и 3 месяца</Typography></li>
        </ul>

        <button className='InviteBtn'>Пригласить</button>

        <div className='VacancyPage__PercentSuitable'>80%</div>
      </Box>
    </li>

  )
}

export default VacancyPageCandidateCard
