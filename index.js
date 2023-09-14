/**

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 
var findMedianSortedArrays = function(nums1, nums2) {
    let a = [...nums1, ...nums2].sort((a,b)=> a - b);
    if(a.length%2 != 0){
        let rem = Math.floor(a.length/2)
        return a[rem]
    }else{
        let rem = a.length/2;
        return (a[rem] + a[rem-1]) / 2;
    }
  
};
