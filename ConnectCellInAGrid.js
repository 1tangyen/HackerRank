function connectedCell(matrix) {
	let maxRegionSize = 0;

	// Helper function to explore adjacent cells recursively
	function exploreRegion(row, col, regionSize) {
		if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
			// Cell is out of bounds
			return;
		}
		if (matrix[row][col] === 0) {
			// Cell is empty
			return;
		}
		// Mark cell as visited
		matrix[row][col] = 0;
		regionSize++;
		// Explore adjacent cells
		exploreRegion(row - 1, col - 1, regionSize);
		exploreRegion(row - 1, col, regionSize);
		exploreRegion(row - 1, col + 1, regionSize);
		exploreRegion(row, col - 1, regionSize);
		exploreRegion(row, col + 1, regionSize);
		exploreRegion(row + 1, col - 1, regionSize);
		exploreRegion(row + 1, col, regionSize);
		exploreRegion(row + 1, col + 1, regionSize);
		// Update maxRegionSize if current region is larger
		maxRegionSize = Math.max(maxRegionSize, regionSize);
	}

	// Iterate over each cell in the matrix
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (matrix[row][col] === 1) {
				// Found a new region, explore it recursively
				exploreRegion(row, col, 0);
			}
		}
	}

	return maxRegionSize;
}

function connectedCell(matrix) {
	let maxRegionSize = 0;

	// explore adjacent cells recursively
	function exploreRegion(row, col, regionSize) {
		if (row < 0 || col < o || row >= matrix.length || col >= matrix[0].length) {
			//cell is out of bounds
			return;
		}
		if (matrix[row][col] === 0) {
			//cell is empty
			return;
		}

		//mark cell as visited
		matrix[row][col] = 0;
		regionSize++;

		//Explore adjacent cells
		exploreRegion(row - 1, col - 1, regionSize);
		exploreRegion(row - 1, col, regionSize);
		exploreRegion(row - 1, col + 1, regionSize);
		exploreRegion(row, col - 1, regionSize);
		exploreRegion(row, col + 1, regionSize);
		exploreRegion(row + 1, col - 1, regionSize);
		exploreRegion(row + 1, col, regionSize);
		exploreRegion(row + 1, col + 1, regionSize);

		//update maxRegionSize if current region is larger
		maxRegionSize = Math.max(maxRegionSize, regionSize);
	}

	// Iterate over each cell in the Matrix
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (matrix[row][col] === 1) {
				exploreRegion(row, col, 0);
			}
		}
	}
	return maxRegionSize;
}
