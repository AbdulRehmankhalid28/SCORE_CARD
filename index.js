let homeEl = document.getElementById("home-el")
let guestEl =document.getElementById("guest-el")
let saveEl = document.getElementById("save-el")


let Hometotal = 0
let GuestTotal = 0



function addHome(numb){
    Hometotal = Number(homeEl.innerText);
    Hometotal += numb;
    homeEl.innerText = Hometotal;
    funOne = homeEl.innerText ;
    console.log(Hometotal)
}

function Addguest(num){
    GuestTotal = Number(guestEl.innerText);
    GuestTotal += num;
    guestEl.innerText = GuestTotal;
    funTwo = guestEl.innerText;
    console.log(GuestTotal)
}

function reset(){
    homeEl.innerText = 0 ;
    guestEl.innerText = 0;
    saveEl.innerText ='Previous Enteries:' ;
}
                                      
function save(){

    let totalStr = `Home- ${Hometotal} And Guest- ${GuestTotal} ,`;
    saveEl.innerText += totalStr;
    console.log(totalStr);
}


    
    
    
    
    
    
    
    
    
    
    

