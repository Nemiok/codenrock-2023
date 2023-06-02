import { changeFilter } from '../../redux-store/app-process/app-process';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import './styles.css';
import { getActiveFilter } from '../../redux-store/app-process/selectors';

interface IFilterTabsProps {
  filterNames: { [K: string]: string }
}

export default function FilterTabs({ filterNames }: IFilterTabsProps) {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(getActiveFilter);

  return (
    <ul className='VacanciesPage__FilterList'>
      {Object.keys(filterNames).map(filter => {
        const isActive = activeFilter === filter;

        return (
          <li
            className={`VacanciesPage__FilterItem ${isActive ? 'VacanciesPage__FilterItem--Active' : ''
              }`}
            key={filter}
            onClick={e => {
              dispatch(changeFilter(filter));
            }}
          >
            <button>{filterNames[filter as keyof typeof filterNames]}</button>
          </li>
        );
      })}
    </ul>
  );
}
