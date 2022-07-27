class UserController {
    constructor(formId, tableId){
        this.formEL= document.getElementById(formId);
        this.tableEl= document.getElementById(tableId);

        this.onSubmit();
      
    }
    onSubmit(){ 
       this.formEL.addEventListener("submit", event=>{
            event.preventDefault();
           
            let values = this.getValues();
            //uando promisses 
            this.getPhoto().then(
             (content)=>{
                values.photo = content;

                this.addLine(values);

             },
             (e)=>{
                console.log("Deu poblema aqui ein",e)
            });

    
 
         });
    }
    getPhoto(){
        return new Promise((resolve, reject)=>{
            let fileReader = new FileReader();

         let elements = [...this.formEL.elements].filter(item=>{
           if(item.name === 'photo'){
             return item
           } 

        });

        let file = elements[0].files[0];


        fileReader.onload=( ) =>{
            resolve(fileReader.result);
       };
         fileReader.onerror = (e)=>{
            reject(e)
         }
        if (file){
             fileReader.readAsDataURL(file);
            }else{
                resolve('dist/img/boxed-bg.jpg');
            }
        });
        
    }
    getValues(){
        let user = {};
      
         [...this.formEL.elements].forEach(function(field, index){

            if(field.name == "gender"){
                if(field.checked === true){
                    user[field.name]= field.value;
                }
                
            }else{
                user[field.name]= field.value;
            }
           
        });

         return new User (
                user.name, 
                user.gender, 
                user.birth, 
                user.country, 
                user.email, 
                user.password, 
                user.photo, 
                user.admin
            );
            
         return objectUser;
    }

     addLine(dataUser){
         this.tableEl.innerHTML=
         `<tr>
         <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
         <td>${dataUser.name}</td>
         <td>${dataUser.email}</td>
         <td>${dataUser.admin}</td>
         <td>${dataUser.birth}</td>
         <td>
           <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
           <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
         </td>
         </tr>
         `;
         
    }
}