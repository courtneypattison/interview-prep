interface CharacterDict {
    [character: string]: number;
}

function getCharFreqTable(str: string): CharacterDict {
    let charDict: CharacterDict = {};
    for (let i = 0; i < str.length; i++) {
        if (charDict[str[i]]) {
            charDict[str[i]]++;
        } else {
            charDict[str[i]] = 1;
        }
    }
    return charDict;
}

export default function isPermutation(str1: string, str2: string): Boolean {
    if (str1.length != str2.length) return false;

    let charDict = getCharFreqTable(str1);

    for (let i = 0; i < str2.length; i++) {
        if (charDict[str2[i]]) {
            charDict[str2[i]]--;
            if (charDict[str2[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}