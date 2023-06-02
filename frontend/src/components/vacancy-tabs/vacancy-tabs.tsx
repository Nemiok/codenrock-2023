import {VacancyTabNames} from '../../utils/const/const';
import './styles.css';

export default function VacancyTabs() {
  return (
    <ul className='VacancyPage__TabList'>
      {Object.keys(VacancyTabNames).map(tab => {
        return (
          <li
            className={`VacancyPage__TabItem ${
              tab === 'currVacancy' ? 'VacancyPage__TabItem--Active' : ''
            }`}
            key={tab}
          >
            <button>{VacancyTabNames[tab as keyof typeof VacancyTabNames]}</button>
          </li>
        );
      })}
    </ul>
  );
}
