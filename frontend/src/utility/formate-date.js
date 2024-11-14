// export function formatedDate(isoString, locale = 'en-CA') {
//   const date = new Date(isoString);
//   return date.toLocaleDateString(locale);
// }

export function formatedDate(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}