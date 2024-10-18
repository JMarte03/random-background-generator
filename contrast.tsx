const getContrastYIQ = (hex: string) => {
  hex = hex.replace(/^#/, '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Return 'light' or 'dark'
  return yiq >= 128 ? 'light' : 'dark';
};

export const contrastText = (bgColor: string) => {
    let color = ""
    getContrastYIQ(bgColor) == 'light' ? color = '#000' : color = '#fff'
    return color
}