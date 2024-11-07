//Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio";
import { Transaction } from "./transaction";


//function to display portfolio

function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    console.log(`Total Portfolio Value: $${totalValue.toFixed(2)}`);

    const allocation = getPortfolioAllocation();
    console.log("Portfolio Allocation:");
    allocation.forEach(asset => {
        console.log(`- ${asset.name} (${asset.type}): ${asset.allocation.toFixed(2)}%`);
    });
}

//Display portfolio value
console.log("Portfolio:");
displayPortfolio();

//transactions

try {
    console.log("Executing Transactions:")
    const transaction1 = new Transaction(1,"buy", 50);
    console.log(`Transaction 1: Bought 50 units of Apple`);


    const transaction2 = new Transaction(2, "sell", 10);
    console.log(`Transaction 2: Sold 5 units of Tesla`);
} catch (error) {
    console.error("Transaction error:", error.message);
}

console.log("Updated Portfolio:");
displayPortfolio();

//displays updated portfolio