import { colorBlend, decToHex, hexColorToNumArr, hexToDec, isHex, midPoint } from './colorBlend';

describe('colorBlend', () => {
  it('should return #7f7f7f for #000000 and #ffffff', () => {
    expect(colorBlend('#000000', '#ffffff', 0.5)).toBe('#7f7f7f');
  });

  it('should return red for red, blue, 0', () => {
    expect(colorBlend('#ff0000', '#0000ff', 0)).toBe('#ff0000');
  });
});

describe('isHex', () => {
  it('should return true for "#000000', () => {
    expect(isHex('#000000')).toBe(true);
  });

  it('should return false for "red"', () => {
    expect(isHex('red')).toBe(false);
  });

  it('should handle mixed capitalization', () => {
    expect(isHex('#abABab')).toBe(true);
  });

  it('should disallow letters above f', () => {
    expect(isHex('#G00000')).toBe(false);
  });
});

describe('hexToDec', () => {
  it('should return 0 for 00', () => {
    expect(hexToDec('00')).toBe(0);
  });

  it('should return 255 for "ff"', () => {
    expect(hexToDec('ff')).toBe(255);
  });

  it('should return 165 for "A5"', () => {
    expect(hexToDec('A5')).toBe(165);
  });
});

describe('decToHex', () => {
  it('should return "00" for 0', () => {
    expect(decToHex(0)).toBe('00');
  });

  it('should return "ff" for 255', () => {
    expect(decToHex(255)).toBe('ff');
  });

  it('should return "a5" for 165', () => {
    expect(decToHex(165)).toBe('a5');
  });
});

describe('hexColorToNumArr', () => {
  it('should return correct values for "#00a5ff', () => {
    expect(hexColorToNumArr('#00a5ff')).toStrictEqual([0, 165, 255]);
  });
});

describe('midPoint', () => {
  it('should return 50 for 0, 100, .5', () => {
    expect(midPoint(0, 100, 0.5)).toBe(50);
  });

  it('should return 40 for 0, 100, .4', () => {
    expect(midPoint(0, 100, 0.4)).toBe(40);
  });

  it('should return 80 for 50, 100, .6', () => {
    expect(midPoint(50, 100, 0.6)).toBe(80);
  });

  it('should return 70 for 100, 50, .6', () => {
    expect(midPoint(100, 50, 0.6)).toBe(70);
  });

  it('should return 255 for 255, 0, 0', () => {
    expect(midPoint(255, 0, 0)).toBe(255);
  });
});
