/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function (a, d) {
    function getDays(mid) {
      let days = 1;
      let total = 0;
      for (let i of a) {
        total += i;
        if (total > mid) {
          total = i;
          days += 1;
        }
      }
      return days;
    }
  
    let low = Math.max(...a);
    let high = a.reduce((a, b) => a + b, 0);
  
    while (low <= high) {
      let mid = parseInt((low + high) / 2);
      let minDays = getDays(mid);
      if (minDays > d) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low;
  };