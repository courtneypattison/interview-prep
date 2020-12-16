interface Dictionary {
    [key: string]: Boolean
}

export function allUniqueChars(string: string) {
    var characters: Dictionary = {}
    for (let c of string) {
        if (characters[c]) return false;
        characters[c] = true;
    }
    return true;
}

export function allUniqueCharsSet(string: string) {
    return new Set([...string]).size == [...string].length;
}