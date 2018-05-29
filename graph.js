class GraphDB {
    constructor(V, E) {
        this.graph = {};
        this.graph.edges = [];
        this.graph.vertices = [];
        this.graph.verticeIndex = {};
        this.graph.autoId = 0;

        if (Array.isArray(V)) {
            this.addVertices(V)
        }
        if (Array.isArray(E)) {
            this.addEdges(E)
        }
    }

    addVertices(V) {}

    addEdges(E) {}
}