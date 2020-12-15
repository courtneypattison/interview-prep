interface Dictionary {
    [key: string]: Boolean
}

function allUniqueChararacters(string: string) {
    var characters: Dictionary = {}
    for (let c of string) {
        if (characters[c]) return false;
        characters[c] = true;
    }
    return true;
}

function allUniqueChararactersSet(string: string) {
    return new Set([...string]).size == [...string].length;
}

console.log(allUniqueChararacters('🍎🍎abc'))
console.log(allUniqueChararactersSet('🍎abcå'))