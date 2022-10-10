// stack DS
let arr = []
function push(item){
    arr[arr.length] = item;
}
function sortedPush(item){
    if (item > arr[arr.length-1] || arr.length == 0){
        arr[arr.length] = item;
        return;
    }
    console.log(`array not sorted skipping ${item}`);
}

const pop = () => { 
    arr[arr.length-1] = undefined;
    arr.length--;
}

const peek = () => {
    return arr[arr.length-1];
}

const isEmpty = () => {
    return arr.length == 0;
}


push(1);
sortedPush(3);
sortedPush(5);
sortedPush(3);
sortedPush(7);
pop()
console.log(arr)