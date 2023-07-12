import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, " d 'de 'LLLL 'del' yyyy 'a las' HH:mm:ss",{locale: es})}</time>;
}
