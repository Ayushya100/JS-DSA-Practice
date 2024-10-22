const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

// Breadth First Search is better approach than Depth First Search in these type of problems as BFS operats by checking all the
// neighbours of one node and then move to next level, whereas DFS in worst case keeps going in one distance which can lead to 
// longer time complexity

const createGraph = (edges) => {
    let graph = {};

    for (const edgeCol of edges) {
        const [edge1, edge2] = edgeCol;

        if (!(edge1 in graph)) {
            graph[edge1] = [];
        }
        if (!(edge2 in graph)) {
            graph[edge2] = [];
        }

        graph[edge1].push(edge2);
        graph[edge2].push(edge1);
    }

    return graph;
}

const shortestPath = (edges, start, dest) => {
    const graph = createGraph(edges);

    let queue = [ [start, 0] ];
    let visited = new Set([ start ]);

    while(queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === dest) {
            return distance;
        }

        for (const neighbourNode of graph[node]) {
            if (!visited.has(neighbourNode)) {
                visited.add(neighbourNode);
                queue.push([neighbourNode, distance + 1]);
            }
        }
    }
}
