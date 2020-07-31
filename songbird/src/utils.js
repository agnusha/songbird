export function chooseRandomElemsFromArray(initialArray, length) {
    const newArray = [];
    for (let i = 0; i < length; i++) {
        const randomItem = initialArray[Math.floor(Math.random() * initialArray.length)];
        initialArray.splice(initialArray.indexOf(randomItem), 1);
        newArray.push(randomItem);
    }
    return newArray;
}


export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
