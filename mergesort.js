function mergeSort(array) {

    if (array.length < 2) {
        return array;
    } else {
        let firstHalf = mergeSort(array.slice(0, (Math.floor(array.length / 2))));
        let secondHalf = mergeSort(array.slice((Math.floor(array.length / 2)), array.length));

        let finalArray = [];

        while (firstHalf.length > 0 && secondHalf.length > 0) {
            if (firstHalf[0] > secondHalf[0]) {
                finalArray.push(secondHalf[0]);
                secondHalf.shift();
            } else if (firstHalf[0] === secondHalf[0]) {
                finalArray.push(secondHalf[0]);
                firstHalf.shift();
                secondHalf.shift();
            } else {
                finalArray.push(firstHalf[0]);
                firstHalf.shift();
            }
        }

            while (firstHalf.length > 0) {
                finalArray.push(firstHalf[0]);
                firstHalf.shift();
            }

            while (secondHalf.length > 0) {
                finalArray.push(secondHalf[0]);
                secondHalf.shift();
            }

        return finalArray;
    }
}

export { mergeSort }