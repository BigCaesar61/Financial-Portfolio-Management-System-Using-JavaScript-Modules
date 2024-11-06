//Task 2: Create the Portfolio Module

import { assets } from "./assets"; //imports the assets array

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        id: asset.id,
        name: asset.name,
        type: asset.type,
        allocation: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}