const url = "http://127.0.0.1:5500/index.html/?id=3" //url de prueba
const url_new = new URL(url); //Obtengo URL
const id = parseInt(url_new.searchParams.get('id')); //Obtengo el id de la URL y lo paso como un entero

var array_id = [];//Arrelgo para almacenar id's
GetId(); //Completo el array con los valores de localStorage

if((Number.isInteger(id)) && ((id % 2) === 0)) //Valido que id sea entero y par
{
    if( (id >= 2) && (id <= 10) ) //Valido que id este entre 2 y 10
    {
        array_id.push(id);
        Alamcenar(array_id);//Almaceno el valor del id en el array de localStorage
    }
}
const div = document.querySelector('#id');
div.innerHTML ='';

for (const id of array_id) {
    //Muestra por index.html
    const parrafo = document.createElement('p');
    parrafo.innerHTML = id;
    div.appendChild(parrafo);

    //Muestra por consola
    console.log(id + '\n')
}

//Almaceno a los id's en la memoria local
function Alamcenar(id)
{
    localStorage.setItem("array_id",JSON.stringify(id));//Actualizar datos de localStorage
}
//Verificacion de valores
function GetId()
{
    const ids = localStorage.getItem('array_id');
    if(ids == null)
    {
        array_id = [];
    }else
    {
        array_id = JSON.parse(ids);
    }
    return array_id;
}