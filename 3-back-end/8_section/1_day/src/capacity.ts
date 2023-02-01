const units3: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert3(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units3.indexOf(fromUnit);
  const toIndex = units3.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}