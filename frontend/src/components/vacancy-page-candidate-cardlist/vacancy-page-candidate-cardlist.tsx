import React from 'react'
import './styles.css'
import VacancyPageCandidateCard from '../vacancy-page-candidate-card/vacancy-page-candidate-card'


function VacancyPageCandidateCardList() {
  return (
    <article>
      <ul className='VacancyPage__CandidateCardList'>
        <VacancyPageCandidateCard />
        <VacancyPageCandidateCard />
        <VacancyPageCandidateCard />
        <VacancyPageCandidateCard />
      </ul>
    </article>
  )
}

export default VacancyPageCandidateCardList
