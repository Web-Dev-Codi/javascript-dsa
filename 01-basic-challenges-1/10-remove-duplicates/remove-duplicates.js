function swap(array, index1, index2) {
   let temp = array[index1];
   array[index1] = array[index2];
   array[index2] = temp;
}

function removeDuplicates(arr) {
   let newArray = [];

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= i; j++) {
         if (arr[i] < arr[j]) {
            swap(arr, i, j)
         }
      }
   }
   return arr;
}

module.exports = removeDuplicates;
