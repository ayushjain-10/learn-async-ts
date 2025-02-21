function findNegativeRowsConcurrent(arr) {
    // Process each row concurrently
    var rowPromises = arr.map(function (row, index) {
        return Promise.resolve({
            index: index,
            hasNegative: row.some(function (num) { return num < 0; })
        });
    });
    return Promise.all(rowPromises)
        .then(function (results) {
        results.forEach(function (result) {
            if (result.hasNegative) {
                console.log("Row ".concat(result.index + 1, " has negative numbers:"), arr[result.index]);
            }
        });
    });
}
// Example usage
var sampleArrayWithNegatives = [
    [1, -2, 3],
    [4, 5, -6],
    [7, 8, 9]
];
findNegativeRowsConcurrent(sampleArrayWithNegatives)
    .catch(function (err) { return console.error('Error:', err); });
