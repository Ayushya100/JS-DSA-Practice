const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
};

const breadthFirstSearch = (graph, start) => {

}

console.log(breadthFirstSearch(graph, 'a'));
