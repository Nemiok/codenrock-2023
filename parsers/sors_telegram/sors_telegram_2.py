#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# Установка библиотек

get_ipython().system('pip install transliterate')
get_ipython().system('pip install numpy')
get_ipython().system('pip install pandas')


# In[ ]:


# Импорт библиотек.

import pandas as pd
import numpy as np
from transliterate import translit, get_available_language_codes


# In[ ]:


# Загрузка данных.

data = pd.read_json('result.json')


# In[ ]:


# Сборка основного датафрейма.

listing = []
for i in range(len(data)):
    listing.append(data['messages'][i])
message_data = pd.DataFrame(listing)


# In[ ]:


# Изменение формата дат.

message_data['date_unixtime'] = message_data['date_unixtime'].astype('int')
message_data['date'] = pd.to_datetime(message_data['date'])


# In[ ]:


# Подсчет числа сообщений для каждого пользователя и сохранение в датафрейм.

data_2 = pd.DataFrame(message_data['from'].value_counts(
)).reset_index().rename(columns={'index': 'login'})


# In[ ]:


# Определение числа сообщений по 99 перцентилю.

query_messages = int(np.percentile(data_2['from'], 99))


# In[ ]:


# Определение самых активных пользователей.

data_query = data_2[data_2['from'] > query_messages]


# In[ ]:


# Общее количество активных пользователей.

print(f'Число пользователей top: {len(data_query)}')


# In[ ]:


# Выгружаем данные, самых активных пользователей в excel.

data_query.to_excel('top_users.xlsx', index = None)


# In[ ]:


# Делаем срез сообщений, самых активных пользователей.

top_messages = message_data[message_data['from'].isin(data_query['login'])]


# In[ ]:


# Функция для поиска ключевых слов в сообщениях.

def return_row(row):
    #print(row['text'])
    n = row['text']
    if isinstance(n, dict):
        return 0
    if isinstance(n, list):    
        return 0
    
    if search_word in n.lower() or search_word_ru in n.lower():
        return 1
    return 0


# In[ ]:


# Реализация поиска, можно английский вариант или транслит.

search_word = input('Введите поисковый запрос(одно слово):\n').lower()

# Перевод в транслит или на русский текст.
search_word_ru = translit(search_word, 'ru')
if search_word == search_word_ru:
    search_word_ru = translit(search_word, 'ru', reversed= True)


# In[ ]:


print(search_word_ru)
sum(top_messages.apply(return_row,axis = 1))


# In[ ]:


top_messages['search'] = top_messages.apply(return_row,axis =1)


# In[ ]:


# Выгружаем данные, сообщений самых активных пользователей в excel.

top_messages[top_messages['search']==1][['from', 'date', 'date_unixtime','text' ]
             ].to_excel('top_messages.xlsx', index=None)

print('Данные сохранены в excel.')

