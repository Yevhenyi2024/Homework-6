function doubleLetter(str) {
    
        let newString = '';
        for (let i = 0; i < str.length; i++) {
            newString += str[i] + str[i];
        }
        return newString;
    }


console.log(doubleLetter('hello')); 
    