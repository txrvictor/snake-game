
export function padScore(score, size) {
  let s = score.toString()
  while (s.length < size) {
    s = '0' + s
  }

  return s
}
