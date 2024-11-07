//Task 3: Create the Transaction Module


import { assets,getAssetByID } from "./assets"
 //importing assets and get assetbyID function


export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.executeTransaction();
    }

    executeTransaction() {
        const asset = getAssetByID(this.assetId);
        if (!asset) {
            throw new Error(`Asset with ID ${this.assetId} not found`);
        }
        if (this.type === "buy") {
            asset.quantity += this.quantity;
            //increases asset quantity when an asset is bought
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for asset ${asset.name}.`)
            }
            asset.quantity =+ this.quantity; //subtracts quantity when assets are sold
        } else {
            throw new Error("Transaction type must be either 'buy' or 'sell'")
        }
    }
}



