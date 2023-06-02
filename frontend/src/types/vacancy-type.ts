import {VacancyStatusType} from '../utils/const/const'

export type VacancyType = {
  id: number;
  title: string;
  city: string;
  company: string;
  specialization: string;
  employment: string;
  experience: string;
  vacancyStatus: keyof typeof VacancyStatusType;
  creationDate: Date;
  updateDate?: Date;
};
