/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let maxl = 0
    let tmp = ''
    for(let i = 0;i<str.length;i++){
        let ch = str.charAt(i)
        let index = tmp.indexOf(ch)
        if(index === -1){
            tmp += ch
            maxl = maxl < tmp.length ? tmp.length : maxl
        }else{
            tmp = tmp.substr(index + 1) + ch
        }
    }
    return maxl
};

lengthOfLongestSubstring("abcabcbbaaacdefg")