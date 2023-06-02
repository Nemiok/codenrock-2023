
# Hack parser

### dev setup

```

# создать виртуальное окружение (рекомендуется python 3.10)
virtualenv env 

# активировать виртуальное окружение
source ./venv/bin/active

# установить зависимости
pip install -r requirements.txt
```

## запустить паука (например для hack.rs)
```
scrapy crawl stackoverflow
```
Используйте ctrl-c для остановки сканирования.
Для сохранения результатов сканирования в файл запускать с ключами -o dump.csv или -o dump.json:
```
scrapy crawl stackoverflow -o dump.csv
```
В данном случае результаты сканирования будут сохранены в csv-файл dump.csv, в корне проекта.

## CRON
```
5 * * * * /app/hack.sh >> /var/log/cron.log 2>&1
```
