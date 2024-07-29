const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  return date.toLocaleDateString('eu-EU', options)
}

export default formatDate
