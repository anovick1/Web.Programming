let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
function findmin(nums){
  let x = nums[0];
  let ans;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < x){
      ans = nums[i];
    }
  }
  document.write(ans);

}
