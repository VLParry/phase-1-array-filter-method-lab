function findMatching(array, string) {
    return array.filter(function (element) {
        return element.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (element) {
        return element.startsWith(string)
    })
}

function matchName(object, string) {
    return object.filter(driver => driver.name === string)
}