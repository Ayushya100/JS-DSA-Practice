const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};

const breadthFirstSearch = (graph, start) => {
    const queue = [ start ];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();
        
        for (const neighbourNode of graph[node]) {
            if (!visited.has(neighbourNode)) {
                visited.add(neighbourNode);
                queue.push(neighbourNode);
            }
        }
    }

    return visited;
}

console.log(breadthFirstSearch(graph, 'a'));
