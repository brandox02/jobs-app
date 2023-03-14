import dayjs from "dayjs";

export function dateToStringAgo(date) {
   const months = dayjs().diff(date, 'days');

   return `Hace ${months} dia${months === 1 ? '' : 's'}`
}