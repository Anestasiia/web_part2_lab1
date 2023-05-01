const days_of_month_and_year = (year, month) => {

    //Date для виводу число останнього дня певного місяця та певного року
    return new Date(year, month, 0).getDate();
}

exports.days_of_month_and_year = days_of_month_and_year