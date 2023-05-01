const Biggest_mutual_divider = (a, b) => {

    const min = Math.min(a, b)
    //найбільший спільний дільник
    let biggest = 1

    for (let i = 2; i <= min; i++) {
        if (a % i === 0 && b % i === 0) biggest = i;
    }

    return biggest;
}

exports.BiggestMutualDivider = Biggest_mutual_divider