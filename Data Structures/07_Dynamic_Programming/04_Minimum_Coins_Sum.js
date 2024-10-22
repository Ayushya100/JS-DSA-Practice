const minimumCoins = (amount, numbers, memo = {}) => {
    if (amount in memo) {
        return memo[amount];
    }

    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minCoinsCount = Infinity;

    for (const number of numbers) {
        const result = minimumCoins(amount - number, numbers, memo);
        if (result !== -1) {
            minCoinsCount = Math.min(minCoinsCount, result + 1);
        }
    }

    memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;
    return memo[amount];
}
