function addToLocalStorage(objectToAdd) {
    localStorage.setItem(`${objectToAdd.taskName}`, JSON.stringify(objectToAdd));
}

function retrieveFromLocalStorage(objectToRetrieve) {
    const retrievedObject = localStorage.getItem(objectToRetrieve.taskName);
    return JSON.parse(retrievedObject);
}

export { addToLocalStorage, retrieveFromLocalStorage }