const inputName= document.getElementById('name');
const inputAge= document.getElementById('age');
const inputGender= document.getElementById('gender');
const btnAdd= document.getElementById('add');
const btnReverse= document.getElementById('reverse');
const inputClave= document.getElementById('clave');
const inputBusqueda= document.getElementById('busqueda');
const btnBuscar= document.getElementById('buscar');
const btnOrdName= document.getElementById('order-name');
const btnOrdAge= document.getElementById('order-age');
const btnOrdGender= document.getElementById('order-gender');
const Lista = document.getElementById('list');
const OrdLista = document.getElementById('order-list');
const Title = document.createElement('h3');

let personas = [];
let OrdPersonas = [];

//Creamos eventos
btnAdd.addEventListener('click',function(){
    if (inputName.value=="" || inputAge.value==""){
        alert("Campos vacios, complete los campos solicitados")
    }
    else{
        let Persona = {
            "Name" : inputName.value.trim().toUpperCase(),
            "Age" : inputAge.value,
            "Gender" : inputGender.value
        };
        personas.push(Persona);
        inputName.value="";
        inputAge.value="";
        Actualizar(1);
    }
});

btnBuscar.addEventListener('click',function(){

});

btnReverse.addEventListener('click',function(){
    OrdPersonas.reverse();
    Actualizar(2);
});

btnOrdName.addEventListener('click',function(){
    OrdPersonas = JSON.parse(JSON.stringify(personas));
    OrdPersonas.sort(function(x, y) {
        if(x.Name < y.Name) {
            return -1;
        }else if (x.Name > y.Name) {
            return 1;
        }else {
            return 0;
        }      
    });
    console.table(personas);
    console.table(OrdPersonas);
    Title.innerHTML = 'Lista Ordenada por Nombre';
    Actualizar(2);
});

btnOrdGender.addEventListener('click',function(){
    OrdPersonas = JSON.parse(JSON.stringify(personas));
    OrdPersonas.sort(function(x, y) {
        if(x.Gender < y.Gender) {
            return -1;
        }else if (x.Gender > y.Gender) {
            return 1;
        }else {
            return 0;
        }      
    });
    console.table(personas);
    console.table(OrdPersonas);
    Title.innerHTML = 'Lista Ordenada por Genero';
    Actualizar(2);
});

btnOrdAge.addEventListener('click',function(){
    OrdPersonas = JSON.parse(JSON.stringify(personas));
    OrdPersonas.sort(function(x, y) {
        if(x.Age < y.Age) {
            return -1;
        }else if (x.Age > y.Age) {
            return 1;
        }else {
            return 0;
        }      
    });
    console.table(personas);
    console.table(OrdPersonas);
    Title.innerHTML = 'Lista Ordenada por Edad';
    Actualizar(2);
});


function Actualizar(Lst){
    //Crear Elemento Tabla y Encabezado
    const Tabla = document.createElement('table');
    const TblBody = document.createElement('tbody');
    var Encabezado = document.createElement('tr');
    var Enc1 = document.createElement('th');
    Enc1.style.width = '60%';
    var TxtEnc1 = document.createTextNode('NAME');
    var Enc2 = document.createElement('th');
    Enc2.style.width = '20%';
    var TxtEnc2 = document.createTextNode('  AGE  ');
    var Enc3 = document.createElement('th');
    Enc3.style.width = '20%';
    var TxtEnc3 = document.createTextNode(' GENDER ');
    Enc1.appendChild(TxtEnc1);
    Enc2.appendChild(TxtEnc2);
    Enc3.appendChild(TxtEnc3);
    Encabezado.appendChild(Enc1);
    Encabezado.appendChild(Enc2);
    Encabezado.appendChild(Enc3);
    TblBody.appendChild(Encabezado);

    if(Lst == 1){   //Actualizar Lista No Ordenada
        //Crear Celdas con Array Personas
        var Cont = 0        
        personas.forEach(function(x) {
            var Fila = document.createElement('tr');
            Fila.id = 'F'+Cont

            var CeldaName = document.createElement('td');
            var TxtCelda = document.createTextNode(x.Name);
            var CeldaAge = document.createElement('td');
            var TxtAge = document.createTextNode(x.Age);
            var CeldaGender = document.createElement('td');
            var TxtGender = document.createTextNode(x.Gender);
            CeldaName.appendChild(TxtCelda);
            Fila.appendChild(CeldaName);
            CeldaAge.appendChild(TxtAge);
            Fila.appendChild(CeldaAge);
            CeldaGender.appendChild(TxtGender);
            Fila.appendChild(CeldaGender);
            

            TblBody.appendChild(Fila);
            Cont++;
        });
        Tabla.appendChild(TblBody);
        Tabla.setAttribute('border', '2');
        Lista.innerHTML = '';
        Lista.appendChild(Tabla);
        sessionStorage.setItem('personas',JSON.stringify(personas));
    }else{      //Actualizar Lista Ordenada
        //Crear Celdas con Array OrdPersonas
        OrdPersonas.forEach(function(x) {
            var Fila = document.createElement('tr');

            var CeldaName = document.createElement('td');
            var TxtCelda = document.createTextNode(x.Name);
            var CeldaAge = document.createElement('td');
            var TxtAge = document.createTextNode(x.Age);
            var CeldaGender = document.createElement('td');
            var TxtGender = document.createTextNode(x.Gender);
            CeldaName.appendChild(TxtCelda);
            Fila.appendChild(CeldaName);
            CeldaAge.appendChild(TxtAge);
            Fila.appendChild(CeldaAge);
            CeldaGender.appendChild(TxtGender);
            Fila.appendChild(CeldaGender);

            TblBody.appendChild(Fila);
        });
        Tabla.appendChild(TblBody);
        Tabla.setAttribute('border', '2');
        OrdLista.innerHTML = '';
        OrdLista.appendChild(Title);
        OrdLista.appendChild(Tabla);
        sessionStorage.setItem('OrdPersonas',JSON.stringify(OrdPersonas));
    };
};

document.body.onload = function() {
    personas = JSON.parse(sessionStorage.getItem('personas'));
    OrdPersonas = JSON.parse(sessionStorage.getItem('OrdPersonas'));
    if(personas != null){
        Actualizar(1);
        Actualizar(2);
    }else{
        personas = [];
        OrdPersonas = [];
    }
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 