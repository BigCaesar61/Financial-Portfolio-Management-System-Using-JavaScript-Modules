//Task 1: Create the Asset Module

export const assets = [
    {id: 1, name: "Apple Inc.", type: "stock", price: 150, quantity: 20 },
    { id: 2, name: "Tesla Inc.", type: "stock", price: 700, quantity: 10 },
    { id: 3, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 5 },
    { id: 4, name: "Microsoft Inc.", type: "stock", price: 3300, quantity: 15 },
    { id: 5, name: "Corporate A", type: "bond", price: 500, quantity: 8 },
];

export function getAssetByID(id) {
    return assets.find(asset => asset.id === id);
}