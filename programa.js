/*function procesar(){
    console.log("holaaa");
};
*/
//Vamos a crear eventos odiores 

//1. Tener una referencia al elemento del DOM al que queremos agregarle el eventlistener

//creamos un objeto en js que estara haciendo referencia al elemento del DOM

const miBoton= document.getElementById("submit");

//agregamos un oidor de eventos a el elemento
miBoton.addEventListener(
    'click',
    /*La funcion fetch devuelve una promesa, debemos utilizar await,
    porque si no estaria dando en respuesta una promesa y en dato no se tendria una respuesta valida
    */
    async (event)=>{

        //preventDefault previene lo que deberia de pasar 
        event.preventDefault();
        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(num1,num2);

//debemos crear la peticion al backen mediante una peticion con la funcion fetch
        
        const respuesta= await fetch(
            'http://localhost:3002/api/sumar',
            //objeto json donde va la configuracion de la conexion o la peticion a esa ruta
            /*peticion tiene: el metodo(post, get, putt, 
            el metodo donde este nuestra api), los encabezados (se pueden encontrar en htpps headers, 
            headers(encabezados):instruciones para conectarse con el metodo) y el cuerpo*/
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
       );

       //obtener la respuesta 
       const dato= await respuesta.json();
       const div_resultado=document.getElementById("resultado");
       div_resultado.innerHTML=dato;
    }   
);
