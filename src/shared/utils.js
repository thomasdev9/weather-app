import Icon01Day from './assets/icons/01d.png';
import Icon01Night from './assets/icons/01n.png';
import Icon02Day from './assets/icons/02d.png';
import Icon02Night from './assets/icons/02n.png';
import Icon03Day from './assets/icons/03d.png';
import Icon03Night from './assets/icons/03n.png';
import Icon04Day from './assets/icons/04d.png';
import Icon04Night from './assets/icons/04n.png';
import Icon09Day from './assets/icons/09d.png';
import Icon09Night from './assets/icons/09n.png';
import Icon10Day from './assets/icons/10d.png';
import Icon10Night from './assets/icons/10n.png';
import Icon11Day from './assets/icons/11d.png';
import Icon11Night from './assets/icons/11n.png';
import Icon13Day from './assets/icons/13d.png';
import Icon13Night from './assets/icons/13n.png';
import Icon50Day from './assets/icons/50d.png';
import Icon50Night from './assets/icons/50n.png';
import IconUnknown from './assets/icons/unknown.png';

const icons = {
  '01d': Icon01Day,
  '01n': Icon01Night,
  '02d': Icon02Day,
  '02n': Icon02Night,
  '03d': Icon03Day,
  '03n': Icon03Night,
  '04d': Icon04Day,
  '04n': Icon04Night,
  '09d': Icon09Day,
  '09n': Icon09Night,
  '10d': Icon10Day,
  '10n': Icon10Night,
  '11d': Icon11Day,
  '11n': Icon11Night,
  '13d': Icon13Day,
  '13n': Icon13Night,
  '50d': Icon50Day,
  '50n': Icon50Night,
  unknown: IconUnknown,
};

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getIcon = ({ id }) => {
  return icons[id];
};

export const getCurrentData = (data) => {
  const city = data?.name;
  const feelsLike = Math.round(data?.main?.feels_like);
  const humidity = data?.main?.humidity;
  const wind = data?.wind?.speed;
  const tempValue = Math.round(data?.main?.temp);
  const weather = data?.weather[0];
  const desc = weather?.description;
  const iconId = weather?.icon;

  return {
    city: city,
    feelsLike: feelsLike,
    humidity: humidity,
    wind: wind,
    tempValue: tempValue,
    desc: desc,
    iconId: iconId,
  };
};

export const getForecatData = (data) => {
  let list = data?.list;
  list = [list[0], list[8], list[16], list[24], list[32]];
  list = list?.map((item) => {
    const date = new Date(item?.dt * 1000);
    const day = days[date.getUTCDay()];
    const weather = item?.weather[0];
    const iconId = weather?.icon;
    const main = weather?.main;
    const tempValue = Math.round(item?.main?.temp);

    return {
      day: day,
      iconId: iconId,
      main: main,
      tempValue: tempValue,
    };
  });
  return list;
};
