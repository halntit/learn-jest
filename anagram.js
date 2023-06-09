function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^a-zA-Z]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = isAnagram;