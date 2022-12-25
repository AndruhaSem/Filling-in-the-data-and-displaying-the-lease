export function displayDate(data, i) {
  const time = data + i * 60 * 60 * 1000;
  const num = new Date(time);
  console.log(new Date(time));
  return `${num.getHours()}:${num.getMinutes()}`;
  //   const date = new Date(parseInt(data + i * 60 * 60 * 860));
  //   const dateNow = new Date();
  //   const yearDif = dateNow.getFullYear() - date.getFullYear();

  //   if (yearDif === 0) {
  //     const dayDif = dateNow.getDate() - date.getDate();
  //     if (dayDif === 0) {
  //       const hourDif = dateNow.getHours() - date.getHours();
  //       if (hourDif === 0) {
  //         const minutesDif = dateNow.getMinutes() - date.getMinutes();

  //         if (minutesDif >= 0 && minutesDif < 5) return "1 минуту назад";
  //         if (minutesDif >= 5 && minutesDif < 10) return "5 минут назад";
  //         if (minutesDif >= 10 && minutesDif < 15) return "10 минут назад";
  //         if (minutesDif >= 15 && minutesDif < 20) return "15 минут назад";
  //         if (minutesDif >= 20 && minutesDif < 25) return "20 минут назад";
  //         if (minutesDif >= 25 && minutesDif < 30) return "25 минут назад";
  //         if (minutesDif >= 30 && minutesDif < 35) return "30 минут назад";
  //         if (minutesDif >= 35 && minutesDif < 40) return "35 минут назад";
  //         if (minutesDif >= 40 && minutesDif < 45) return "40 минут назад";
  //         if (minutesDif >= 45 && minutesDif < 50) return "45 минут назад";
  //         if (minutesDif >= 50 && minutesDif < 55) return "50 минут назад";
  //         if (minutesDif >= 50 && minutesDif < 55) return "55 минут назад";
  //         if (minutesDif >= 55 && minutesDif < 90) return "1 час назад";

  //         if (minutesDif >= 90 && minutesDif < 120) return "1.5 час назад";
  //         if (minutesDif >= 120 && minutesDif < 180) return "2 час назад";
  //       }
  //       return `${date.getHours()}:${date.getMinutes()}`;
  //     }

  //     return date.toLocaleString("default", {
  //       month: "long",
  //       day: "numeric",
  //     });
  //   }
  //   return (
  //     date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
  //   );
}
