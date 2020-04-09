export const getDateAndHour = () => {
  const date = new Date(),
        day  = date.getDate().toString().padStart(2, '0'),
        month  = (date.getMonth()+1).toString().padStart(2, '0'),
        year  = date.getFullYear(),
        hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return `${day}/${month}/${year} ${hour}`
}
