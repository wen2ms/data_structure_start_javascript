// Best: O(n) [1, 2, 3, 4, 5]
// Worst: O(n^2) [5, 4, 3, 2, 1]
// Average: O(n^2)
// Stable: true [2, 1, 2]

function bubbleSort(nums) {
  const numsCount = nums.length
  for (let i = 0; i < numsCount - 1; ++i) {
    let swapped = false
    for (let j = 0; j < numsCount - i - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) {
      return
    }
  }
}

const case1 = [7, 6, 5, 4, 3, 2]
const case2 = [8, 2, 1, 3, 4]
const case3 = [1, 2, 3]

bubbleSort(case1)
bubbleSort(case2)
bubbleSort(case3)

console.log(case1)
console.log(case2)
console.log(case3)
