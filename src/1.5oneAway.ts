function isOneReplace(first: string, second: string): boolean {
    let letterReplaced = false;
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            if (letterReplaced) return false;
            letterReplaced = true;
        }
    }

    return true;
}

function isOneInsert(long: string, short: string): boolean {
    for (let i = 0, j = 0; i < long.length && j < short.length; i++, j++) {
        if (long[i] !== short[j]) {
            if (i !== j) return false;
            i++;
        }
    }

    return true;
}

export default function isOneEditAway(first: string, second: string): boolean {
    if (first.length == second.length) {
        return isOneReplace(first, second);
    } else if (first.length + 1 == second.length) {
        return isOneInsert(first, second);
    } else if (first.length - 1 == second.length) {
        return isOneInsert(second, first);
    }

    return false;
}
