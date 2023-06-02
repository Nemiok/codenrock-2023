import { useForm } from 'react-hook-form';
import FilterTabs from '../filter-tabs/filter-tabs';
import { useAppDispatch } from '../../redux-store/hooks';
import { Box } from '@mui/material';
import './styles.css';
import { fetchVacanciesAction, sendSearchParamsAction } from '../../redux-store/api-actions';
import SVG_ICONS from '../../assets/images/svg-icons';
import { FilterName } from '../../utils/const/const';
import { getToken } from '../../services/token';

export default function VacanciesFilters() {
  const dispatch = useAppDispatch();

  type FormDataType = {
    searchParams: string;
  };

  const { register, handleSubmit, reset } = useForm<FormDataType>();

  const onSubmit = (formData: FormDataType) => {
    dispatch(sendSearchParamsAction(formData.searchParams));
  };

  const resetBntClickHandler = () => {
    reset()
    dispatch(fetchVacanciesAction(getToken()));
  };

  return (
    <>
      <section className='VacanciesPage__FilterSection'>
        <Box className='VacanciesPage__FormContainer'>
          <form className='VacanciesPage__Form' onSubmit={handleSubmit(onSubmit)}>
            <div id='SearchIcon'>{SVG_ICONS.SEARCH_ICON}</div>
            <input
              id='searchVacancyInput'
              type='search'
              placeholder='Укажите название должности'
              {...register('searchParams', {
                required: true,
              })}
            />
            <button id='FindByVacancyBtn' type='submit'>
              найти
            </button>
            <Box sx={{ backgroundColor: 'background1.one', color: 'everBlackText.one', padding: '11px 21px', }}>
              <button id='ResetBtn' type='reset' onClick={resetBntClickHandler}>
                <span>сбросить</span>
              </button>
            </Box>
          </form>
          <button id='AddVacancyBtn'>Добавить вакансию</button>
          <Box className='VacanciesPage__Filter'>
            <FilterTabs filterNames={FilterName} />
          </Box>
        </Box>
        <div className='VacanciesPage__FormBackground'></div>
      </section>
    </>
  );
}
