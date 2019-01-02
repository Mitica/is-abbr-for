
export = function (abbr: string, s: string): boolean {
    return isStartWordAbbr(abbr, s);
}

function isStartWordAbbr(abbr: string, s: string): boolean {
    abbr = abbr.replace(/[\.\s,`']+/g, '');
    let words: string[] = s.split(/[ ]+/g).filter(word => word && word.trim());
    return detectStartWordAbbr(abbr, words);
}

function detectStartWordAbbr(abbr: string, words: string[]): boolean {
    if (abbr.length > words.length) {
        return false;
    }

    if (!compareStartWords(abbr, words)) {
        const uWords = words.filter(word => word[0].toUpperCase() == word[0]);
        if (uWords.length !== words.length) {
            return compareStartWords(abbr, uWords);
        }
        return false;
    }

    return true;
}

function compareStartWords(abbr: string, words: string[]): boolean {
    if (abbr.length > words.length) {
        return false;
    }
    for (let i = 0; i < words.length; i++) {
        if (abbr[i] !== words[i][0] && abbr[i] !== words[i][0].toUpperCase()) {
            if (words[i][0] === words[i][0].toLowerCase()) {
                words = words.slice(0, i).concat(words.slice(i + 1));
                return compareStartWords(abbr, words);
            }
            return false;
        }
    }

    return true;
}

// function isLetter(s: string): boolean {
//     return s.toUpperCase() !== s.toLowerCase();
// }