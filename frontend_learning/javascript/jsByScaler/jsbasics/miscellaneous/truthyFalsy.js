// The values that comes under falsy:

// 0 (zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

let a = 2;

if(a) {
    console.log('Iam truthy');
} else {
    console.log('Iam Falsy');
}

(function() {
    if((-100 && 100 && "0") || [] === true || 0) {
        console.log(1);
        if([] || (0 && false)) {
            console.log(2);
        }
        if(Infinity && NaN && "false") {
            console.log(3);
        }
        if('') {
            console.log(4);
        }
    } else {
        console.log(5);
        if(({} || false === "") && !(null && undefined)) {
            console.log(6);
        }
    }


})()