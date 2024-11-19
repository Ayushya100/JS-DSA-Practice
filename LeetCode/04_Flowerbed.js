// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Examples:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = function(flowerbed, n) {
    let flowerCount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            let isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            if (isLeftEmpty && isRightEmpty) {
                flowerbed[i] = 1;
                flowerCount++;

                if (flowerCount >= n) {
                    return true;
                }
            }
        }
    }

    return flowerCount >= n;
};
