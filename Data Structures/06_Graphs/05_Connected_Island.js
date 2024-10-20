const countConnectedIslands = (graph) => {
    let visitedSet = new Set();
    let count = 0;

    function dfs(node) {
        if (!visitedSet.has(node)) {
            visitedSet.add(node);

            for (const neighbourNode of graph[node]) {
                dfs(neighbourNode);
            }
        }
    }

    for (const node of graph) {
        if (!visitedSet.has(node)) {
            dfs(node);
            count++;
        }
    }

    return count;
}