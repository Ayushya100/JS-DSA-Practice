const grid = [
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0 ,0, 1, 1, 1]
];

const islandCount = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set();
    let count = 0;

    function dfs(r, c) {
        const pos = `${r}, ${c}`;

        if (
            r < 0 || r >= rows || c < 0 || c >= cols ||
            grid[r][c] === 'W' || visited.has(pos)
        ) {
            return;
        }

        visited.add(pos);

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(`${r}, ${c}`)) {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}