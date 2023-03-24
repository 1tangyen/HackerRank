function maxMin(k, arr) {
    arr.sort((a, b) => (a - b))
    let minFairness = Infinity

    arr.forEach((value, index) => {
        if(i+k <= arr.length) {
            let currentFairness = arr[index+k-1] - value
            minFairness = Math.min(currentFairness, minFairness)
        }
    })
    return minFairness
}