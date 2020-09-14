module.exports = function check(str, bracketsConfig) {
    str = str.split('')
    let arr = []

    if (str.length % 2 !== 0) return false

    for(let i = 0; i < str.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++) {
            if(str[i] === bracketsConfig[j][1] && arr[arr.length - 1] === bracketsConfig[j][0]) arr.pop()
            else if(str[i] === bracketsConfig[j][0]) arr.push(str[i])
        }
    }
    
    return arr.length === 0
}
