
// Given an array of numbers, find all pair of numbers whose sum is equal to a given number
// eg. 1,2,3,4,5,6 and 6 -> [[2, 4], [1, 5]]
export const equalSum = (xs, n) => {
	// Your code here...
	const list = []
    for (let i = 0; i < xs.length; i++)
        for (let j = i + 1; j < xs.length; j++)
            if (xs[i] + xs[j] == n)
                list.push([xs[i], xs[j]])
    return list
}

const tests = [
	[equalSum, [[1, 2, 3, 4, 5, 6], 6], [[1, 5], [2, 4]]],
	[equalSum, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14], [[4, 10], [5, 9], [6, 8]]],
	[equalSum, [[1, 2, 3, 4, 5, 6], 8], [[2, 6], [3, 5]]],
]

export default tests
