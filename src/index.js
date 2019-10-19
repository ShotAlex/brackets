module.exports = function check(str, bracketsConfig) {
    //  I have no idea how I can use the second parameter in this example. 
    //  Because my solution is this
    if (str.length % 2 !== 0 || !str.length) return false;
    let c = [];

    for (let i = 0; i < str.length; i++) {
        if ( str[i] == '(' || str[i] == '{' || str[i] == '[') {
            c.push(str[i]);
            
        } else if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
            if (c.length == 0) {
                return false;
            } else if (c[c.length-1] == '(' && str[i] == ')' || c[c.length-1] == '{' && str[i] == '}' || c[c.length-1] == '[' && str[i] == ']') {
                c.pop();
            } else {
                return false;
            }
        }

        if (str[i] == '|' ||
        str[i] == '1' ||
        str[i] == '2' ||
        str[i] == '3' ||
        str[i] == '4' ||
        str[i] == '5' ||
        str[i] == '6' ||
        str[i] == '7' ||
        str[i] == '8' ||
        str[i] == '9') {
            if (str[i] != c[c.length-1]) {
                c.push(str[i]);
            } else {
                c.pop();
            }
        }

    }
    
    if (c.length > 0) return false;
    return true;
}
    



    

    // if (str.length % 2 !== 0 || !str.length) return false;
    // let c = [];

    // for (let i = 0; i < str.length; i++) {
    //     if ( str[i] == '(' || str[i] == '{' || str[i] == '[') {
    //         c.push(str[i]);
            
    //     } else if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
    //         if (c.length == 0) return false;
            
    //         if (c[c.length-1] == '(' && str[i] == ')' || c[c.length-1] == '{' && str[i] == '}' || c[c.length-1] == '[' && str[i] == ']') c.pop();
            
    //     }

    // }

    // return true;
