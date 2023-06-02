import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import { useEffect } from 'react';
import { fetchVacancyAction } from '../../redux-store/api-actions';
import { getVacancy } from '../../redux-store/app-process/selectors';
import Vacancy from '../../components/vacancy/vacancy';
import VacancyHero from '../../components/vacancy-hero/vacancy-hero';
import { Box } from '@mui/material'
import './styles.css'
import VacancyPageCandidateCardList from '../../components/vacancy-page-candidate-cardlist/vacancy-page-candidate-cardlist';

export default function VacancyPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVacancyAction(id));
  }, [dispatch, id]);

  const vacancy = useAppSelector(getVacancy);

  return (
    <main className='VacancyPage'>
      <VacancyHero />
      <Box className='VacancyPage__VacancyContainer'>
        <Vacancy vacancy={vacancy} />
      </Box>
    </main>
  );
}
