//Стрічкова функція
const Split_string_into_array = (string) => {
    //розбиття стрічки за символами в дужках
    return string.split(/[, .-]/)
}

exports.SplitStringIntoArray = Split_string_into_array