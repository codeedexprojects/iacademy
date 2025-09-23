 // Minimal classNames helper without external deps
 export function cn(...inputs) {
   return inputs
     .flat(Infinity)
     .filter(Boolean)
     .join(' ')
 }

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
