const countMaxPathCost = (grid, row = 0, col = 0, memo = {}) => {
    const pos = `${row}, ${col}`;

    if (row >= grid.length || col >= grid[0].length) {
        return -Infinity;
    }

    if (row === grid.length - 1 && col === grid[0].length) {
        return grid[row][col];
    }

    if (pos in memo) {
        return memo[pos];
    }

    const rightPath = countMaxPathCost(grid, row + 1, col, memo);
    const downPath = countMaxPathCost(grid, row, col + 1, memo);

    memo[pos] = Math.max(rightPath, downPath) + grid[row][col];
    return memo[pos];
}

const countMinPathCost = (grid, row = 0, col = 0, memo = {}) => {
    const pos = `${row}, ${col}`;

    if (row >= grid.length || col >= grid[0].length) {
        return Infinity;
    }

    if (row === grid.length - 1 && col === grid[0].length) {
        return grid[row][col];
    }

    if (pos in memo) {
        return memo[pos];
    }

    const rightPath = countMinPathCost(grid, row + 1, col, memo);
    const downPath = countMinPathCost(grid, row, col + 1, memo);

    memo[pos] = Math.min(rightPath, downPath) + grid[row][col];
    return memo[pos];
}
