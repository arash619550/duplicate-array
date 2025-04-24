const arr = ["amir", "haide", "sepide", "ghazal", "pouya", "nava", "sepide", "amir"];
function removeDuplicates(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (!temp.includes(array[i]))
            temp.push(array[i]);
    }
    return temp;
}
const result = removeDuplicates(arr);
console.log(result);