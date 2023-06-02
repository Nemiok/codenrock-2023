FROM ubuntu:latest
FROM python:3.10
MAINTAINER kondin@etown.ru

RUN mkdir app
COPY . /app

RUN pip3 install -r app/requirements.txt

#Install Cron
RUN apt-get update
RUN apt-get -y install less
RUN apt-get -y install vim
RUN apt-get -y install mc
RUN apt-get -y install git
RUN apt-get -y install logrotate
RUN apt-get -y install cron

RUN touch /var/log/cron.log

#RUN crontab crontab
RUN crontab -l | { cat; echo "52 * * * * /app/hack.sh >> /var/log/cron.log 2>&1"; } | crontab -

CMD cron && tail -f /var/log/cron.log
