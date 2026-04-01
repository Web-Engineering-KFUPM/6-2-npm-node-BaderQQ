export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
export function subtract(numbers) {
    return numbers.reduce((diff, num) => diff - num, numbers[0] * 2);
  }

    export function multiply(numbers) {
      return numbers.reduce((product, num) => product * num, 1);
    }

    export function divide(numbers) {
      return numbers.slice(1).reduce((quotient, num) => quotient / num, numbers[0]);
    }