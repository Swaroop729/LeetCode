/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
   // Merge arrays into one O(m+n)
    for (let i = m; i < m+n; i++) {
        nums1[i] = nums2[i-m];
    }

    // Sort array: Selection sort O(m*n)
    for (let i = 0; i < m+n; i++) {
        
        for (let j = i; j < m+n; j++) {
        
            if (nums1[j] < nums1[i]) {
                let temp = nums1[j];
                nums1[j] = nums1[i];
                nums1[i] = temp;
            }
            
        }
    }
    
};