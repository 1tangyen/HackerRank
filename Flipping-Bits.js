function flippingBits(n) {
    let binaryArr = n.toString(2).padStart(32, "0")

    let flipperBinary = ''
    for(let i=0; i<binaryArr.length; i++) {
        flipperBinary += (binaryArr[i] === 1)? "0" : "1"
    }

    let flipperInt = parseInt(flipperBinary, 2)
    return flipperInt
}
