const monthAliases = {
  jan: 0, january: 0, januari: 0,
  feb: 1, february: 1, februari: 1,
  mar: 2, march: 2, mars: 2,
  apr: 3, april: 3,
  may: 4, maj: 4,
  jun: 5, june: 5, juni: 5,
  jul: 6, july: 6, juli: 6,
  aug: 7, august: 7, augusti: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9, okt: 9, oktober: 9,
  nov: 10, november: 10,
  dec: 11, december: 11,
}

const shortMonths = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  sv: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
}
const normalizedMonth = (value) => String(value || '').toLowerCase().replaceAll('.', '')
const parseMonthYear = (value) => {
  const match = String(value || '').trim().match(/^([A-Za-zÀ-ÿ.]+)\s+(\d{4})$/)
  const month = match ? monthAliases[normalizedMonth(match[1])] : undefined
  return month === undefined ? null : { month, year: Number(match[2]) }
}
const formatUtc = (date, locale, includeDay = false) => {
  const language = locale === 'sv' ? 'sv' : 'en'
  const month = shortMonths[language][date.getUTCMonth()]
  return `${includeDay ? `${date.getUTCDate()} ` : ''}${month} ${date.getUTCFullYear()}`
}

export const formatDatePart = (value, locale = 'en') => {
  const text = String(value || '').trim()
  if (!text) return ''
  if (/^(present|pågående)$/i.test(text)) return locale === 'sv' ? 'Pågående' : 'Present'
  if (/^\d{4}-\d{2}(?:-\d{2})?$/.test(text)) {
    const includeDay = text.length === 10
    return formatUtc(new Date(`${includeDay ? text : `${text}-01`}T00:00:00Z`), locale, includeDay)
  }
  const parsed = parseMonthYear(text)
  if (parsed) return formatUtc(new Date(Date.UTC(parsed.year, parsed.month, 1)), locale)
  return text
}

export const formatDisplayDate = (value, locale = 'en') => String(value || '')
  .split(/\s+(?:-|–|—)\s+/)
  .map((part) => formatDatePart(part, locale))
  .join(' – ')

export const monthNumberFromLabel = (value, useEnd = false) => {
  const text = String(value || '').trim()
  if (/^\d{4}-\d{2}(?:-\d{2})?$/.test(text)) {
    const [year, month] = text.split('-').map(Number)
    return year * 12 + month - 1
  }
  if (/^(present|pågående)$/i.test(text)) return new Date().getFullYear() * 12 + new Date().getMonth()
  const parsed = parseMonthYear(text)
  if (parsed) return parsed.year * 12 + parsed.month
  const year = text.match(/\b(\d{4})\b/)
  return year ? Number(year[1]) * 12 + (useEnd ? 11 : 0) : null
}
