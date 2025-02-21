async function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
    try {
        // Process each row concurrently
        const rowPromises = arr.map(async row => {
            return row.reduce((sum, num) => sum + num, 0);
        });

        const rowSums = await Promise.all(rowPromises);
        return rowSums.reduce((total, sum) => total + sum, 0);
    } catch (error) {
        console.error('Error calculating sum:', error);
        throw error;
    }
}

// Example usage
const sampleArray2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayConcurrent(sampleArray2D)
    .then(total => console.log('Total sum:', total))
    .catch(err => console.error('Error:', err));
