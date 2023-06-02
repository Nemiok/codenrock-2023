import { getVacancyLoadingStatus } from '../../redux-store/app-process/selectors';
import { useAppSelector } from '../../redux-store/hooks';
import { VacancyRow } from '../../types/api-response';
import { LoadingStatus } from '../../utils/const/const';
import { Box, Typography, SvgIcon } from '@mui/material'
import Loader from '../loader/loader';
import './styles.css'
import VacancyPageCandidateCardList from '../vacancy-page-candidate-cardlist/vacancy-page-candidate-cardlist';
import formatNumber from '../../utils/functions/formatNumber';
import SVG_ICONS from '../../assets/images/svg-icons';

type PropsType = {
  vacancy: VacancyRow;
};

export default function Vacancy({ vacancy }: PropsType) {
  const vacancyLoadingStatus = useAppSelector(getVacancyLoadingStatus);

  if (
    vacancyLoadingStatus === LoadingStatus.Pending ||
    vacancyLoadingStatus === LoadingStatus.Idle
  ) {
    return <Loader />;
  }

  return (
    <>
      <section className='VacancySection'>
        <h1 className='VacancySection__Title'>{vacancy?.title.value_string}</h1>

        <Box className='VacancySection__VacancyContent'>

          <Box className='VacancyContent__Paragraph' sx={{
            backgroundColor: 'backgroundVacancyParagraph.one'
          }}>
            <Box className='VacancyContent__MainCriteria'>
              <b>{vacancy?.city_id.value_string}</b>
              <b>{vacancy?.client_id.value_string}</b>
              <b>{`от ${formatNumber(200000)} ₽`}</b>
            </Box>
            <Box className="VacancyContent__SecondaryCriteria">
              <Typography sx={{
                color: 'text.disabled',
              }}><span>Информационные технологии, интернет, телеком</span></Typography>
              <Typography sx={{
                color: 'text.disabled',
              }}><span>{vacancy?.employment.value_string}</span></Typography>
              <Typography sx={{
                color: 'text.disabled',
              }}><span>{vacancy?.experience.value}</span></Typography>
            </Box>
          </Box>

          <Box>
            <h2 className='VacancyContent__ParagraphTitle'>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '29px',
                color: 'everDisabledTextColor.one'
              }}> Описание</Typography></h2>
            <Box className='VacancyContent__Paragraph' sx={{
              backgroundColor: 'backgroundVacancyParagraph.one'
            }}>
              <p>
                Наш продукт – современное web-приложение для обслуживания клиентов-физических лиц, которое
                является основным для работы более 4000 сотрудников. Наша команда выполняет весь спектр
                работ по развитию приложения: от проработки UI до тестирования и пилотирования приложения.
                Приложение написано целиком с нуля и не является "коробочным" решением. Мы не
                останавливаемся на достигнутом и развиваем приложение в концепции “единого окна” -
                приложения, которое заменит множество рабочих окон оператора и позволит эффективно
                выполнять обслуживание клиентов без постоянных переключений. Основной вектор развития
                приложения сейчас - интеграции со сторонними системами и сервисами.
              </p>
            </Box>
          </Box>

          <Box>
            <h2 className='VacancyContent__ParagraphTitle'>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '29px',
                color: 'everDisabledTextColor.one'
              }}> Обязанности</Typography></h2>
            <Box className='VacancyContent__Paragraph' sx={{
              backgroundColor: 'backgroundVacancyParagraph.one'
            }}>
              <ul className='VacancyContent__WorkCriteriaList'>
                <li className='VacancyContent__WorkCriteriaItem'>
                  Доработками имеющегося функционала и разработка новых микросервисов по интеграционному
                  решению
                </li>
                <li className='VacancyContent__WorkCriteriaItem'>Доработками web-приложения по обслуживанию клиентов-физических лиц</li>
                <li className='VacancyContent__WorkCriteriaItem'>Проведением Cross Code Review</li>
                <li className='VacancyContent__WorkCriteriaItem'>Участием в проектировании архитектуры приложения</li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2 className='VacancyContent__ParagraphTitle'>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '29px',
                color: 'everDisabledTextColor.one'
              }}> Требования</Typography></h2>
            <Box className='VacancyContent__Paragraph' sx={{
              backgroundColor: 'backgroundVacancyParagraph.one'
            }}>
              <ul className='VacancyContent__WorkCriteriaList'>
                <li className='VacancyContent__WorkCriteriaItem'>
                  Опыт разработки на Java от 2 лет со знанием Spring Framework (Core, Web, Data, Security,
                  Integration, Boot, Cloud)
                </li>
                <li className='VacancyContent__WorkCriteriaItem'>Опыт работы в команде</li>
                <li className='VacancyContent__WorkCriteriaItem'>Использование систем контроля версий (GIT)</li>
                <li className='VacancyContent__WorkCriteriaItem'>Опыт работы с Testcontainers, Kafka, Docker</li>
                <li className='VacancyContent__WorkCriteriaItem'>Понимание принципов и технологий для CI/CD.</li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2 className='VacancyContent__ParagraphTitle'>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '29px',
                color: 'everDisabledTextColor.one'
              }}> Условия</Typography></h2>
            <Box className='VacancyContent__Paragraph' sx={{
              backgroundColor: 'backgroundVacancyParagraph.one'
            }}>
              <ul className='VacancyContent__WorkCriteriaList'>
                <li className='VacancyContent__WorkCriteriaItem'>Официальное оформление с первого дня выхода на работу.</li>
                <li className='VacancyContent__WorkCriteriaItem'>
                  Возможность выбрать офис в Новосибирске (Академгородок - Демакова, 30 или Октябрьская
                  магистраль, 4).
                </li>
                <li className='VacancyContent__WorkCriteriaItem'>Атмосферу профессионального развития, вдохновленную принципами Agile.</li>
                <li className='VacancyContent__WorkCriteriaItem'>Профессиональную команду разработки, авторитетных тимлидов и опытных наставников.</li>
                <li className='VacancyContent__WorkCriteriaItem'>
                  У нас самый уникальный портфель бенефитов по программе софинансирования (ДМС со
                  стоматологией, фитнес, школа ин. языков на выбор, скидки на коробочные продукты банка и
                  партнеров).
                </li>
                <li className='VacancyContent__WorkCriteriaItem'>
                  Мы поможем развить вашу проф. экспертизу: оплатим профессиональные тренинги и внешние
                  образовательные курсы, участвуем в ИТ активностях (митапы, хакатоны, юконы).
                </li>
                <li className='VacancyContent__WorkCriteriaItem'>
                  Вовлеченность, комфорт, свобода, минимум бюрократии, нет дресс-кода, гибкое начало и
                  завершение рабочего дня, приходи – с нами будет интересно!
                </li>
              </ul>
            </Box>
          </Box >

          <Box>
            <h2 className='VacancyContent__ParagraphTitle'>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '29px',
                color: 'everDisabledTextColor.one'
              }}> Ключевые навыки</Typography></h2>
            <Box className='VacancyContent__Paragraph' sx={{
              backgroundColor: 'backgroundVacancyParagraph.one'
            }}>
              <ul className='VacancyContent__SkillsList'>
                {vacancy && Object.values(vacancy.stack.value_string).map(skill => (
                  <li className='VacancyContent__SkillsItem' key={skill}>{skill}</li>
                ))}
              </ul>
            </Box>
          </Box >

        </Box >
      </section >

      <article>
        <div className='VacancySection__TitleContainer'>
          <h2 className='VacancySection__Title'>Подходят</h2>
          <button className='VacancySection__RefreshCandidatesBtn'>
            <SvgIcon inheritViewBox sx={{
              color: 'text.primary',
              width: '21px',
              height: '21px',
              '& svg path': {
                fill: 'currentcolor'
              }
            }}>
              {SVG_ICONS.REFRESH_ICON}
            </SvgIcon>
          </button>
        </div>
        <VacancyPageCandidateCardList />
      </article>

    </>
  );
}
