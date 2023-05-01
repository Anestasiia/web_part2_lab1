const sort_array_of_users_by_field = (array) => {
    //сорт. за певним полем
    return array.sort(
        //вираз для порівняння
        function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
}

exports.sort_array_of_users_by_field = sort_array_of_users_by_field