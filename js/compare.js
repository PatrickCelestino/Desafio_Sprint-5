
//car
let carArr = [];
const MAX_CARS_TO_COMPARE = 2; 

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
        
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
                
            
        } else {
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Necessário selecionar 2 carros para comparar");
        return;
    
    }
    function HideCompare() {
        document.getElementById("compare").style.display = "none";
        
        carArr = [];
        const checkboxes = document.querySelectorAll(".checkbox");
        checkboxes.forEach(cb => cb.checked = false);    
    
}

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
        document.getElementById("compare").style.display = "none"; 
    carArr = [];
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(cb => cb.checked = false);
}

function UpdateCompareTable() {
 
}


