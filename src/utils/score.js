
export function padScore(score, size = 3) {
  let s = score.toString()
  while (s.length < size) {
    s = '0' + s
  }

  return s
}
