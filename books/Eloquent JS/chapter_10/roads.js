import { buildGraph } from "./graph.js"

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function createRoadGraph() {
  let source = roads.filter((_, i) => i % 2 === 0)
  let dest = roads.filter((_, i) => i % 2 !== 0)
  return buildGraph(source, dest)
}

const roadGraph = createRoadGraph();

export {
  roadGraph
} //Wrote export as object so I can add additional components to the interface
