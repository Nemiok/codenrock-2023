
const processDate = (date: string) => {
  const D = new Date(date)

  const DDay = D.getDate();
  const DMonth = D.getMonth() + 1;
  const DYear = D.getFullYear();
  const DHours = D.getHours();
  const DMinutes = D.getMinutes();


  const DMonthName = new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D).slice().at(-1) === 'т' ?
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)) + 'а' :
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)).slice(0, -1) + 'я';

  return {
    DDay,
    DMonth,
    DYear,
    DHours,
    DMinutes,
    DMonthName,
  }
}

export default processDate
