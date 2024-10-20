const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'c'],
    ['q', 'r'],
    ['t', 's'],
    ['r', 'u'],
    ['q', 't'],
];

const createGraph = (edges) => {
    const graph = {};

    for (const edgePair of edges) {
        const [edge1, edge2] = edgePair;

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

const findPath = (edges, start, dest) => {
    const graph = createGraph(edges);

    let stack = [ start ];
    let visitedSet = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        if (node === dest) {
            return true;
        }

        if (!visitedSet.has(node)) {
            visitedSet.add(node);

            for (let neighbourNode of graph[node]) {
                if (!visitedSet.has(neighbourNode)) {
                    stack.push(neighbourNode);
                }
            }
        }
    }

    return false;
}

console.log(createGraph(edges));
console.log(findPath(edges, 't', 'a'));
