export function cToF(celsius: number): number {
  return +((celsius * 9) / 5 + 32).toFixed(1)
}

export function fToC(fahrenheit: number): number {
  return +(((fahrenheit - 32) * 5) / 9).toFixed(1)
}
