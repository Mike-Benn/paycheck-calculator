export { getItemWithId , calculatePaycheck } 


function getItemWithId(id , arr) {
    let arrCopy = [...arr];
    console.log(arrCopy)
    for (let i = 0; i < arrCopy.length; i++) {
        if (arr[i].id === id) {
            let item = arr[i];
            arr.splice(i , 1);
            return {item , arr};
        }
    }
}

function calculatePaycheck(id , paycheckValues , rates) {
    let userRates = rates[id];

}
