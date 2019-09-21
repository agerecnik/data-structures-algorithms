//BFS is used to determine the shortest path and when node we are looking for is close.
//It uses more memory.

//DFS is like solving a maze. It goes as deep as it can and when it hits a dead end, it backtracks and finds a different route.
//It tells us if a path exists and uses less memory. In case of a really deep graph it can get slow (deeper graph = more recursive calls = more space complexity/larger call stack).

//SHORTEST PATH
//These algorithms take into account weights of a graph.
//Bellman-Ford: it accomodates negative weights compared to Dijkstra's.
//Dijkstra: faster/more efficient than Bellman-Ford.