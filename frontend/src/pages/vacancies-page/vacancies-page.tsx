import VacanciesFilters from '../../components/vacancies-filters/vacancies-filters';
import VacanciesList from '../../components/vacancies-list/vacancies-list';
import VacanciesPropertyFilter from '../../components/vacancies-property-filter/vacancies-property-filter';
import './styles.css'

export default function VacanciesPage() {
  return (
    <main className='VacanciesPage'>
      <VacanciesFilters />
      <div className='VacanciesPage__SectionGroup'>
        <VacanciesList />
        <VacanciesPropertyFilter />
      </div>

    </main>
  );
}
