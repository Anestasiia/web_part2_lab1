const Shuffle_array = (array) => {
    //Алгорит  Фішера — Йетса
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

exports.ShuffleArray = Shuffle_array