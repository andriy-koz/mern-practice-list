import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  value: String,
})

const PracticeListItem = mongoose.model("PracticeListItem", itemSchema);

export default PracticeListItem;