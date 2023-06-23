export function formatLongText(text: string): string {
  const th = 16;
  if (text.length > th) {
    return text.substring(0, th) + "...";
  } else {
    return text;
  }
}

export function calculateSum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
