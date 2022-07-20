var name = document.querySelector("#exempleInputName");
var gender = document.querySelectorAll("#form-user-create");
var birth = document.querySelector("#exempleInputBirth");
var country = document.querySelector("#exempleInputCountry");
var email = document.querySelector("#exempleInputEmail");
var password = document.querySelector("#exempleInputPassword");
var photo = document.querySelector("#exempleInputFile");
var admin = document.querySelector("#exempleInputAdmin");


var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){

    if(field.name == "gender"){
        if(field.checked === true){
            console.log('SIM', field);
        }
         
    }else{
        console.log('NÂO');
    }
    //console.log(field.name, field.id);
});