function highlightRow(row) {
    row.dataset.originalClass = row.className;
    row.className = "highlight";
}

function unhighlightRow(row) {
    row.className = row.dataset.originalClass;
}