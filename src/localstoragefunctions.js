function addToLocalStorage(objectToAdd) {
    localStorage.setItem(`${objectToAdd.one}`, JSON.stringify(objectToAdd));
}

function retrieveFromLocalStorage(objectToRetrieve) {
    const retrievedObject = localStorage.getItem(`${objectToRetrieve}`, JSON.stringify(objectToRetrieve));
    return JSON.parse(retrievedObject);
}

export { addToLocalStorage, retrieveFromLocalStorage }