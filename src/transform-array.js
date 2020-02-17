module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error;
    }

    let array = [];

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                array.pop();
                break;
            case '--double-next':
                if( i + 1 < arr.length ) {
                    array.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if( i - 1 >= 0 ) {
                    array.push(arr[i - 1]);
                }
                break;
            default:
                array.push(arr[i]);
                break;
        }
    }

    return array;
};
