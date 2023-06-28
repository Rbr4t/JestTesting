const analyzeArray = (nums) => {
    return {
        "average": nums.reduce((a, b) => a + b, 0) / nums.length || 0,
        "min": nums.length > 0 ? Math.min(...nums) : 0,
        "max": nums.length > 0 ? Math.max(...nums) : 0,
        "length": nums.length || 0
    }
}

module.exports = analyzeArray