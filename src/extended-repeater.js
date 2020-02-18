module.exports = function repeater(str, options) {
    str = String(str);

    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1,
        separator = options.separator ? options.separator : '+',
        addition = options.addition !== undefined ? String(options.addition) : false,
        additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1,
        additionSeparator = options.additionSeparator ? options.additionSeparator : '|',
        arr = [];

    if(typeof repeatTimes != 'number') {
        repeatTimes = 1;
    }

    if(typeof additionRepeatTimes != 'number') {
        additionRepeatTimes = 1;
    }

    let string = str;

    if (addition) {
        string += addition;
        for(let i = 1; i < additionRepeatTimes; i++) {
            string += additionSeparator + addition;
        }
    }

    let result = string;

    for(let i = 1; i < repeatTimes; i++) {
        result += separator + string;
    }

    return result;
};
  