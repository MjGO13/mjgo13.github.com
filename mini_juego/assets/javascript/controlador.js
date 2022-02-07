let gano = false;
let datos = ['','','','','','','','',''];
let conbinaciones = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

let cuadrilla = document.querySelectorAll('.caja-padre div');
let turno = "";
do{
    turno = prompt("Selecione X 'o' O");
}while(turno!="X" && turno!="O")



for(ele of cuadrilla){
    ele.addEventListener('click',function(e){
        console.log(this);
        if( this.className === "" && gano===false){
            if(turno==="X"){
                let elemento = document.createElement('img');
                elemento.src = "./public/images/close.svg";
                this.appendChild(elemento);
                this.classList.add('activado');
                switch(this.id){
                    case 'cero': datos[0] = "X"; validar(); break;
                    case 'uno': datos[1] = "X"; validar(); break;
                    case 'dos': datos[2] = "X"; validar(); break;
                    case 'tres': datos[3] = "X"; validar(); break;
                    case 'cuatro': datos[4] = "X"; validar(); break;
                    case 'cinco': datos[5] = "X"; validar(); break;
                    case 'seis': datos[6] = "X"; validar(); break;
                    case 'siete': datos[7] = "X"; validar(); break;
                    case 'ocho': datos[8] = "X"; validar(); break;
                }
                turno="O"
            }else if(turno==="O"){
                let elemento = document.createElement('img');
                elemento.src = "./public/images/circulo.svg";
                this.appendChild(elemento);
                this.classList.add('activado');
                switch(this.id){
                    case 'cero': datos[0] = "O"; validar(); break;
                    case 'uno': datos[1] = "O"; validar(); break;
                    case 'dos': datos[2] = "O"; validar(); break;
                    case 'tres': datos[3] = "O"; validar(); break;
                    case 'cuatro': datos[4] = "O"; validar(); break;
                    case 'cinco': datos[5] = "O"; validar(); break;
                    case 'seis': datos[6] = "O"; validar(); break;
                    case 'siete': datos[7] = "O"; validar(); break;
                    case 'ocho': datos[8] = "O"; validar(); break;
                }
                turno="X";
            }
        }
        
    });
    
}

function validar(){
    for(var i=0;i<=7;i++){
        let combi = conbinaciones[i];
        let a = datos[combi[0]];
        let b = datos[combi[1]];
        let c = datos[combi[2]];
        if(a==="" || b==="" || c===""){
            continue;
        }
        if(a===b && b===c){
            console.log(a,b,c);
            console.log(combi[0],combi[1],combi[2]);
            for(var i=0;i<=2;i++){
                cuadrilla[combi[i]].style.background = "red";
                
            }
            gano = true;
            funcGano();
            break;
        }
    }
}

window.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if(e.key==="r"){
        reiniciar();
    }
})

function reiniciar(){
    gano = false;
    for(ele of cuadrilla){
        ele.classList.remove('activado');
        if(ele.childElementCount>0){
            ele.children[0].remove();
        }
    }
    datos = ['','','','','','','','',''];
}

function funcGano(){
    if(gano) {setTimeout(alert("Ganooooo " + turno),3000);}
}