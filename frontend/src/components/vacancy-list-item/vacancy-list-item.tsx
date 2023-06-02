import { VacancyRow } from '../../types/api-response';
import SVG_ICONS from '../../assets/images/svg-icons';
import './styles.css'
import { Box, SvgIcon, Typography } from '@mui/material';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/const/const';
import processDate from '../../utils/functions/processDate';

type PropsType = {
  vacancy: VacancyRow;
};

export default function VacancyListItem({ vacancy }: PropsType) {
  const { DDay, DHours, DMinutes, DMonthName } = processDate(vacancy.created_at.value_string)

  const navigate = useNavigate();

  const onClickHandler = (id: string) => {
    navigate(generatePath(AppRoute.VacancyPage, { id }));
  };

  return (
    <li onClick={() => onClickHandler(vacancy.vacancy_id.value)} className='VacanciesSection__VacancyItem'>
      <Box sx={{
        backgroundColor: 'background1.one',
        padding: '20px',
        paddingBottom: '15px',
        borderRadius: '15px',
        transition: 'background-color .1s ease-in-out',
        '&:hover': {
          backgroundColor: 'var(--backgroundColorSecondary)'
        }
      }}>

        <div className='VacanciesSection__VacancyItemTitle'>
          <Typography sx={{
            color: 'everBlackText.one',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '29px'
          }}>{vacancy.title.value}</Typography>

          <button onClick={e => e.stopPropagation()} className='VacancyItem__ActionsMenu' type='button'>
            <SvgIcon inheritViewBox sx={{
              width: '28px',
              height: '24px',
              color: 'textColor1.two',
              '& svg path': {
                fill: 'currentColor'
              }
            }}>
              {SVG_ICONS.THREE_DOTS}
            </SvgIcon>
          </button>
        </div>

        <ul className='VacancyItem__Properties'>
          <li className='VacancyItem__PropertiesItem'><Typography sx={{ color: 'everBlackText.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.city_id.value_string}</Typography></li>
          <li className='VacancyItem__PropertiesItem'><Typography sx={{ color: 'everBlackText.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.client_id.value_string}</Typography></li>
          <li className='VacancyItem__PropertiesItem'><Typography sx={{ color: 'everBlackText.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.stack.value_string_implode}</Typography></li>
          <li className='VacancyItem__PropertiesItem'><Typography sx={{ color: 'everBlackText.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.employment.value_string}</Typography></li>
          <li className='VacancyItem__PropertiesItem'><Typography sx={{ color: 'everBlackText.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.experience.value_string}</Typography></li>
        </ul>

        <div className='VacancyItem__Status'>
          <div className='VacancyItem__StatusBar'>
            <span>
              {vacancy.status_id.value_string === 'Открыта' ? SVG_ICONS.VACANCY_STATUS_OPEN :
                vacancy.status_id.value_string === 'Закрыта' ? SVG_ICONS.VACANCY_STATUS_CLOSED :
                  SVG_ICONS.VACANCY_STATUS_PROGRESS}
            </span>
            <Typography sx={{ color: 'textColor1.one', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{vacancy.status_id.value_string}</Typography>
            <button onClick={e => e.stopPropagation()} className='VacancyItem__StatusMenu' type='button'>
              {SVG_ICONS.ARROW}
            </button>
          </div>

          <Typography sx={{ color: 'text.disabled', fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', lineHeight: '19px' }}>{`${DDay} ${DMonthName} ${DHours}:${DMinutes}`}</Typography>
        </div>
      </Box>
    </li>
  );
}
