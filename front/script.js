const enviar = async()=>{
    const response = await axios({
        url:"http://localhost:3000/guardar",
        method:"post",
        data:{nombre:"Luis",apellido:"Calderon",correo:"lu@gmail.com",comida_favorita:"arroz"}
    })

    document.getElementById("app").innerHTML= `<h1>${response.data.enviar}</h1>`

}

enviar();

function saveContact(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let comida_favorita = document.getElementById("comida_favorita");


    let alumno = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        comida_favorita: comida_favorita.value,

    }
    console.log(alumno);

    let url= "http://localhost:3000/guardar";

    let params= {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(alumno),
    }
    fetch(url, params).then(response =>{
        console.log("response");
        console.log(response.json());

        if(response.status === 201){
            alert("created successfully");
        }else{
            alert("error");
        }
    });

    return true;
}