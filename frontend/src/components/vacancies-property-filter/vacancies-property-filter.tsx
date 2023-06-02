import React, {useState} from 'react';
import './styles.css';
import Select from 'react-select';
import {Box, Typography, useTheme} from '@mui/material';

const VacanciesPropertyFilter = () => {
  const theme = useTheme();

  const stylesForSelect = {
    control: (styles: any) => ({
      ...styles,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: theme.palette.text.primary,
    }),

    option: (styles: any) => ({
      ...styles,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.main,
      ':hover': {
        backgroundColor: '#DEECED',
        color: theme.palette.text.primary,
      },
    }),

    menu: (styles: any) => ({
      ...styles,
      backgroundColor: theme.palette.primary.main,
    }),
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background1.one',
        borderRadius: '15px',
        maxHeight: '570px',
      }}
    >
      <form className='VacanciesPropertyFilter'>
        <label className='VacanciesPropertyFilter__Label' htmlFor='location'>
          <Typography
            sx={{
              color: 'everBlackText.one',
              fontSize: '14px',
              lineHeight: '14px',
            }}
          >
            Город:
          </Typography>

          <Select
            isSearchable={true}
            styles={stylesForSelect}
            options={[{label: 'Санкт-Петербург'}]}
            defaultValue={{label: 'Выберите город'}}
          />
        </label>

        <label className='VacanciesPropertyFilter__Label' htmlFor='category'>
          <Typography
            sx={{
              color: 'everBlackText.one',
              fontSize: '14px',
              lineHeight: '14px',
            }}
          >
            Компания:
          </Typography>

          <Select
            isSearchable={true}
            styles={stylesForSelect}
            options={[{label: 'Совкомбанк'}]}
            defaultValue={{label: 'Выберите компанию'}}
          />
        </label>

        <label className='VacanciesPropertyFilter__Label' htmlFor='experience'>
          <Typography
            sx={{
              color: 'everBlackText.one',
              fontSize: '14px',
              lineHeight: '14px',
            }}
          >
            Специализация:
          </Typography>

          <Select
            isSearchable={true}
            styles={stylesForSelect}
            options={[{label: 'Разработчик'}]}
            defaultValue={{label: 'Выберите специализацию'}}
          />
        </label>

        <label className='VacanciesPropertyFilter__Label' htmlFor='salary'>
          <Typography
            sx={{
              color: 'everBlackText.one',
              fontSize: '14px',
              lineHeight: '14px',
            }}
          >
            Опыт работы:
          </Typography>

          <Select
            isSearchable={true}
            styles={stylesForSelect}
            options={[{label: '1-3 года'}]}
            defaultValue={{label: 'Опыт работы'}}
          />
        </label>

        <label className='VacanciesPropertyFilter__Label' htmlFor='education'>
          <Typography
            sx={{
              color: 'everBlackText.one',
              fontSize: '14px',
              lineHeight: '14px',
            }}
          >
            Тип занятости:
          </Typography>
          <Select
            isSearchable={true}
            styles={stylesForSelect}
            options={[{label: 'Удалённый'}]}
            defaultValue={{label: 'Выберите тип занятости'}}
          />
        </label>

        <button onClick={e => e.preventDefault()} className='VacanciesPropertyFilter__ResetBtn'>
          Сбросить фильтр
        </button>
      </form>
    </Box>
  );
};

export default VacanciesPropertyFilter;
