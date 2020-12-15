export {};

interface CharacterDict {
    [character: string]: number;
}

function isPermutation(str1: string, str2: string): Boolean {
    if (str1.length != str2.length) return false;

    let cDict: CharacterDict = {};
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        let cCount = cDict[str1[i]];
        if (cCount) {
            cDict[str1[i]]++;
            if (cDict[str1[i]] == 0) diff++;
        } else {
            cDict[str1[i]] = 1;
        }
        if (cDict[str1[i]] == 1) diff--;

        cCount = cDict[str2[i]];
        if (cCount) {
            cDict[str2[i]]--;
            if (cDict[str2[i]] == 0) diff++;
        } else {
            cDict[str2[i]] = -1;
        }
        if (cDict[str2[i]] == -1) diff--;

        if ((cDict[str1[i]] || cDict[str2[i]]) >= str1.length - i) {
            return false;
        }
    }  

    return diff == 0;
}

module.exports = isPermutation;
