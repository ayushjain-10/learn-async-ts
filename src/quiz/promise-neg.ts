function findNegativeRowsConcurrent(arr: number[][]): Promise<void> {
    // Process each row concurrently
    const rowPromises = arr.map((row, index) => 
        Promise.resolve({
            index,
            hasNegative: row.some(num => num < 0)
        })
    );

    return Promise.all(rowPromises)
        .then(results => {
            results.forEach(result => {
                if (result.hasNegative) {
                    console.log(`Row ${result.index + 1} has negative numbers:`, arr[result.index]);
                }
            });
        });
}

// Example usage
const sampleArrayWithNegatives = [
    [1, -2, 3],
    [4, 5, -6],
    [7, 8, 9]
];

findNegativeRowsConcurrent(sampleArrayWithNegatives)
    .catch(err => console.error('Error:', err));
