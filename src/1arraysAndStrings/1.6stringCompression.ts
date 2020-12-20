export default function compressString(str: string): string {
    let compressed: string[] = [];
    let currentChar = "";
    let charCount = 0;

    for (let c of [...str]) {
        if (currentChar == c) {
            charCount++
        } else {
            if (currentChar) {
                compressed.push(currentChar);
                compressed.push(String(charCount));
            }
            currentChar = c;
            charCount = 1;
        }
    }
    compressed.push(currentChar);
    compressed.push(String(charCount));

    if (compressed.length < str.length) {
        return compressed.join("");
    }
    
    return str;
}
