const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};

const depthFirstSearchIteratively = (graph, start) => {

}

const depthFirstSearchRecursive = (graph, start, visited = new Set()) => {

}

console.log(depthFirstSearchIteratively(graph, 'a'));
