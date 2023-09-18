function parseNumberToShortString(number) {
  if (number >= 1000000) {
    if (number % 1000000 === 0) {
      return number / 1000000 + "m";
    } else {
      return (number / 1000000).toFixed(1) + "m";
    }
  } else if (number >= 1000) {
    if (number % 1000 === 0) {
      return number / 1000 + "k";
    } else {
      return (number / 1000).toFixed(1) + "k";
    }
  } else {
    return number.toString();
  }
}

export default parseNumberToShortString;
