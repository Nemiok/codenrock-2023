import { getVacanciesLoadingStatus, getVacanciesTest } from '../../redux-store/app-process/selectors';
import { useAppSelector } from '../../redux-store/hooks';
import { LoadingStatus } from '../../utils/const/const';
import Loader from '../loader/loader';
// import {VacancyType} from '../../types/vacancy-type';
import VacancyListItem from '../vacancy-list-item/vacancy-list-item';
import './styles.css';

export default function VacanciesList() {
  const vacancies = useAppSelector(getVacanciesTest);
  const vacanciesLoadingStatus = useAppSelector(getVacanciesLoadingStatus);

  if (
    vacanciesLoadingStatus === LoadingStatus.Pending ||
    vacanciesLoadingStatus === LoadingStatus.Idle
  ) {
    return <Loader />;
  }

  return (
    <section className='VacanciesPage__VacanciesSection'>
      <ul className='VacanciesSection__List'>
        {vacancies?.rows.map(vacancy => (
          <VacancyListItem key={vacancy.vacancy_id.value} vacancy={vacancy} />
        ))}
      </ul>
    </section>
  );
}
