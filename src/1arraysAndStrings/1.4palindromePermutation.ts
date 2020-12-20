function isSpace(char: string): boolean {
    return char == " "
        || char == "	"
        || char == "\n"
        || char == "\r";
}

function getCharFreq(str: string): Map<string, number> {
    let charFreq = new Map();
    for (let char of [...str]) {
        if (isSpace(char)) continue;
        const charCount = charFreq.get(char);
        if (charCount) {
            charFreq.set(char, charCount + 1)
        } else {
            charFreq.set(char, 1);
        }
    }
    return charFreq;
}

export default function isPalindromePermutation(str: string): boolean {
    let charFreq = getCharFreq(str);
    let isCentreChar = false;

    for (let count of charFreq.values()) {
        if (count % 2 !== 0) {
            if (isCentreChar) {
                return false
            } else {
                isCentreChar = true;
            }
        }
    }

    return true;
}

export function isPalindromePermutationBoolean(str: string): boolean {
    let oddChars = new Map();

    for (let char of [...str]) {
        if (isSpace(char)) continue;
        const oddChar = oddChars.get(char);
        if (oddChar) {
            oddChars.delete(char);
        } else {
            oddChars.set(char, true);
        }
    }

    return oddChars.size <= 1;
}

export function isPalindromePermutationBit(str: string): boolean {
    let bitVector = createBitVector(str);
    return bitVector == 0 || exactlyOneBitSet(bitVector);
}

function createBitVector(str: string): number {
    let bitVector = 0;

    for (let c of [...str]) {
        if (isSpace(c)) continue;
        const charCode = c.charCodeAt(0);
        bitVector = toggle(bitVector, charCode);
    }

    return bitVector;
}

function toggle(bitVector: number, index: number): number {
    let mask = 1 << index;

    if ((bitVector & mask) == 0) {
        bitVector |= mask;
    } else {
        bitVector &= ~mask;
    }

    return bitVector;
}

function exactlyOneBitSet(bitVector: number): boolean {
    return (bitVector & (bitVector - 1)) == 0;
}