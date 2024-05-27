function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let mid = Math.round(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    mergeSort(left);
    mergeSort(right);

    let [i, j, k] = [0, 0, 0];

    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        array[k] = right[j];
        j += 1;
        k += 1;
      } else {
        array[k] = left[i];
        k += 1;
        i += 1;
      }
    }

    while (i < left.length) {
      array[k] = left[i];
      k += 1;
      i += 1;
    }

    while (j < right.length) {
      array[k] = right[j];
      k += 1;
      j += 1;
    }

    return array;
  }
}
console.clear();
console.log("\n MERGE SORT\n");
const oneArray = [4, 2, 3, 1];
console.log(` UNSORTED ARRAY: ${oneArray}`);
console.log(` SORTED ARRAY: ${mergeSort(oneArray)}\n`);

const twoArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(` UNSORTED ARRAY: ${twoArray}`);
console.log(` SORTED ARRAY: ${mergeSort(twoArray)}\n`);

const threeArray = [3, 2, 7, 8, 5, 4, 1, 6, 9];
console.log(` UNSORTED ARRAY: ${threeArray}`);
console.log(` SORTED ARRAY: ${mergeSort(threeArray)}\n`);

const fourArray = [356, 243, 1000, 734, 836, 587, 412, 139, 654, 932];
console.log(` UNSORTED ARRAY: ${fourArray}`);
console.log(` SORTED ARRAY: ${mergeSort(fourArray)}`);
