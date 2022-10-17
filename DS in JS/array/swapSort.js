/** 
 * works only for array where all elements are in range 1 to n
 
iterate over the loop and check if the element is present at the index of the element
if no then swap the element with the element at the index of the element
 */

nums = [3, 4, 5, 1, 7, 8, 5, 1];
function swapSort() {
        let i=0;
        while(i<nums.length) {
                if(nums[i] !== i+1 && nums[nums[i]-1] !== nums[i]) {
                        let temp = nums[i];
                        nums[i] = nums[temp-1];
                        nums[temp-1] = temp;
                } else {
                        i++;
                }
        }
        for(let i=0; i<nums.length; i++) {
                if(nums[i] !== i+1) {
                        console.log('missing numbers are: ' + (i+1));
                }
        }
}

swapSort();
