const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  
  {
    typeItem: {
      type: String,
      required: true,
      trim: true,
      set: (v) => {
        if (!v) return 'Goods';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'GOODS' || upper === 'PRODUCT') return 'Goods';
        if (upper === 'SERVICES' || upper === 'SERVICE') return 'Services';
        return v;
      }
    },
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    itemStore: {
      type: String,
      trim: true,
    },
    itemCategory: {
      type: String,
      trim: true,
    },
    itemQuantity: {
      type: Number,
      minimum: 0,
    },
    itemDimension: {
      type: String,
      trim: true,
    },
    itemWeight: {
      type: String,
      trim: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
    itemUpc: {
      newCode:{
                type: String,
                trim: true,
              },
      itemNumber:{
        type: Number,
        trim: true,
      }
    },
    itemBrand: {
      type: String,
      trim: true,
    },
    itemManufacturer: {
      type: String,
      trim: true,
    },
    itemCostPrice: {
      type: Number,
      minimum: 0,
    },
    itemSellingPrice: {
      type: Number,
      minimum: 0,
    },
    itemDescription: {
      type: String,
      trim: true,
    },
    stockOnHand: {
      type: Number,
      trim: true,
      minimum: 0,
    },
    stockAvailable: {
      type: Number,
      trim: true,
      minimum: 0,
    },
    Create: {
      type: String,
      trim: true
    },
    data: Buffer, 
    contentType:String,
    isUsed: {
      type: Boolean,
      default: false
    },
    condition: {
      type: String,
      set: (v) => {
        if (!v) return 'New';
        const s = String(v).trim().toUpperCase();
        if (s === 'NEW') return 'New';
        if (s === 'USED') return 'Used';
        return v;
      },
      enum: ['New', 'Used', 'NEW', 'USED'],
      default: 'New',
      trim: true
    },
    Creates: {
    },
    branchId: { type: String, default: 'HQ' },
},
  {
    collection: "item",
  }
);

module.exports = mongoose.model("itemSchema", itemSchema);
