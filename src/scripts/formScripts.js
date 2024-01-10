function handleItemTypeChange() {
  var selectedItemType = document.getElementById("item-type").value;

  document.getElementById("form-corrugate").style.display =
    selectedItemType === "Corrugate" ? "block" : "none";
  document.getElementById("form-perishable").style.display =
    selectedItemType === "Perishable" ? "block" : "none";
  document.getElementById("form-ppe").style.display =
    selectedItemType === "PPE" ? "block" : "none";
}
