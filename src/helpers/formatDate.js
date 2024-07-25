const formatDate = (date) => {
  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return date.toLocaleDateString('eu-EU', options);
}

export default formatDate