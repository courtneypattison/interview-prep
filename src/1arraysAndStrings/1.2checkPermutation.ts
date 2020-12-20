function getCharFreqTable(str: string): Map<string, number> {
    let charFreq = new Map;
    for (let i = 0; i < str.length; i++) {
        const charCount = charFreq.get(str[i]);
        if (charCount) {
            charFreq.set(str[i], charCount + 1);
        } else {
            charFreq.set(str[i], 1);
        }
    }
    return charFreq;
}

export default function isPermutation(str1: string, str2: string): Boolean {
    if (str1.length != str2.length) return false;

    let charFreq = getCharFreqTable(str1);

    for (let i = 0; i < str2.length; i++) {
        const charCount = charFreq.get(str2[i]);
        if (charCount) {
            charFreq.set(str2[i], charCount - 1);
            if (charCount < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}