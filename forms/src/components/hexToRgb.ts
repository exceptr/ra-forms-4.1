const hexToRgb = (hex: string): string | null => {
    const regex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  
    if (!regex.test(hex)) {
      return null;
    }
  
    const hexValue = hex.replace("#", "");
  
    let r: number;
    let g: number;
    let b: number;
  
    if (hexValue.length === 3) {
      r = parseInt(hexValue[0] + hexValue[0], 16);
      g = parseInt(hexValue[1] + hexValue[1], 16);
      b = parseInt(hexValue[2] + hexValue[2], 16);
    } else {
      r = parseInt(hexValue.slice(0, 2), 16);
      g = parseInt(hexValue.slice(2, 4), 16);
      b = parseInt(hexValue.slice(4, 6), 16);
    }
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  export default hexToRgb