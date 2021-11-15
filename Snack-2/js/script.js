

const parolaUno = prompt('inserire parola uno');
const parolaDue = prompt('inserire parola due');

if(parolaUno.length > parolaDue.length){
    console.log(parolaUno + ' é piú lunga di ' + parolaDue)
}

else if(parolaUno.length == parolaDue.length){
    console.log(parolaUno + ' é ' + parolaDue + ' hanno la stessa lunghezza')
}
else{
    console.log(parolaDue + ' é piú lunga di ' + parolaUno)
}