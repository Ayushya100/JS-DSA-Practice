/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/

const hasPathDFS = (graph, start, dest) => {
    const stack = [ start ];
    const visitedSet = new Set();

    while(stack.length > 0) {
        const node = stack.pop();

        if (node === dest) {
            return true;
        }

        if (!visitedSet.has(node)) {
            visitedSet.add(node);

            for (const neighbourNode of graph[node]) {
                if (!visitedSet.has(neighbourNode)) {
                    stack.push(neighbourNode);
                }
            }
        }
    }

    return false;
}

const hasPathBFS = (graph, start, dest) => {
    const queue = [ start ];
    const visitedSet = new Set();

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === dest) {
            return true;
        }

        if (!visitedSet.has(node)) {
            visitedSet.add(node);
            for (const neighbourNode of graph[node]) {
                queue.push(neighbourNode);
            }
        }
    }

    return false;
}

const hasPathRec = (graph, start, dest, visited = new Set()) => {
    if (start === dest) {
        return true;
    }

    if (visited.has(start)) {
        return false;
    }

    visited.add(start);

    for (const neighbourNode of graph[start]) {
        if (hasPathRec(graph, neighbourNode, dest)) {
            return true;
        }
    }

    return false;
}
