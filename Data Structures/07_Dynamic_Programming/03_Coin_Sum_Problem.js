const sumPossible = (amount, numbers, memo = {}) => {
    if (amount in memo) {
        return memo[amount];
    }

    if (amount === 0) return true;
    if (amount < 0) return false;

    for (const number of numbers) {
        // memo[amount] = sumPossible(amount - number, numbers, memo);      // CAN BE POSSIBLE
        // if (memo[amount]) {
        if (sumPossible(amount - number, numbers, memo)) {
            return true;
        }
    }

    memo[amount] = false;
    return false;
}
