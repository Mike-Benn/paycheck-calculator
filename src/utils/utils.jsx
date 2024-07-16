export { getItemWithID } 

function getItemWithID(id , arr) {
    let arrCopy = [...arr];
    for (let i = 0; i < arrCopy.length; i++) {
        if (arr[i].id === id) {
            let item = arr[i];
            arr.splice(i , 1);
            return(item , arr);
        }
    }
}