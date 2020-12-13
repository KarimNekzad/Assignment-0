// Karim Nekzad
class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    if(nums.length === 1) {
      return nums[0] === target
    }
    let mid = Math.floor(nums.length/2) // If length = 11, return 5
    if(nums[mid] === target ) {
      return true
    } else if (nums[mid] > target) {
      return this.binarySearch(nums.slice(0, mid), target)
    } else if (nums[mid] < target) {
      return this.binarySearch(nums.slice(mid), target)
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;