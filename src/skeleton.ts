/**
 * takes in array and target suym, returns pair of numbers that sum to target sum. If no two numbers sum, returns empty array
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
function twoNumberSum(array: number[], targetSum: number): number[] {
  array.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = array.length - 1;
  while (pointer1 < pointer2) {
    if (array[pointer1] + array[pointer2] < targetSum) pointer1++;
    else if (array[pointer1] + array[pointer2] < targetSum) pointer2--;
    else return [array[pointer1], array[pointer2]];
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
export default twoNumberSum;
