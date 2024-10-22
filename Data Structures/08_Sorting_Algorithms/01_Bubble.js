const bubbleSort = (array) => {
    let isSwap = false;

    do {
        isSwap = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                isSwap = true;
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    } while (isSwap);

    return array;
}
