export const getValue = (value, prevInput) => {
  if (value === '.' && prevInput.endsWith('.')) {
    return prevInput;
  }
  const lastChar = prevInput.slice(-1);
  const isLastCharOperator = ['+', '-', '*', '/', '%', '.'].includes(lastChar);
  const isCurrentValueOperator = ['+', '-', '*', '/', '%', '.'].includes(value);

  if (isLastCharOperator && isCurrentValueOperator) {
    return prevInput.slice(0, -1) + value;
  } else {
    if (prevInput === '0' && !isCurrentValueOperator) {
      return value;
    } else {
      return prevInput + value;
    }
  }
};
