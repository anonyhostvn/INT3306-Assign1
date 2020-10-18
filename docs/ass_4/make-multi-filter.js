var makeMultiFilter = (originalArray) => {

    let currentArray = originalArray;

    const arrayFilterer = (filterCriteria, callback) => {
        const newCallback = callback ? callback.bind(originalArray) : null;
        if (filterCriteria) {
            currentArray = currentArray.filter(item => filterCriteria(item));
            if (newCallback) newCallback(currentArray);
            return arrayFilterer;
        }
        if (newCallback) newCallback(currentArray);
        return  currentArray;
    }

    return arrayFilterer;
}