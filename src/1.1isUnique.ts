export function allUniqueChars(string: string) {
    var characters = new Map();
    for (let c of string) {
        if (characters.get(c)) return false;
        characters.set(c, true);
    }
    return true;
}

export function allUniqueCharsSet(string: string) {
    return new Set([...string]).size == [...string].length;
}