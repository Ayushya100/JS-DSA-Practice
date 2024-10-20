const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};

const depthFirstSearchIteratively = (graph, start) => {
    const stack = [ start ];
    const visitedSet = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visitedSet.has(node)) {
            visitedSet.add(node);

            for (const neighbourNode of graph[node]) {
                if (!visitedSet.has(neighbourNode)) {
                    stack.push(neighbourNode);
                }
            }
        }
    }

    return visitedSet;
}

const depthFirstSearchRecursive = (graph, start, visited = new Set()) => {
    if (!visited.has(graph[start])) {
        visited.add(graph[start]);

        for (const neighbourNode of graph[start]) {
            depthFirstSearchRecursive(graph, neighbourNode, visited);
        }
    }
}

console.log(depthFirstSearchIteratively(graph, 'a'));
