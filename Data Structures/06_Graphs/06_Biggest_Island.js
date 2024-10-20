const biggestIsland = (graph) => {
    const visitedSet = new Set();
    let largest = 0;

    function dfs(node) {
        if (!visitedSet.has(node)) {
            visitedSet.add(node);
            let size = 1;

            for (let neighbourNode of graph[node]) {
                size += dfs(neighbourNode);
            }
            return size;
        }

        return 0;
    }

    for (const node of graph) {
        if (!visitedSet.has(node)) {
            const componentSize = dfs(node);

            if (componentSize > largest) {
                largest = componentSize;
            }
        }
    }

    return largest;
}
