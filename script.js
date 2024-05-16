document.addEventListener("DOMContentLoaded",()=>{

    let Fname =document.getElementById("firstname")
    let Lname =document.getElementById("lastname")
    let mail =document.getElementById("mail")
    let address =document.getElementById("address")
    let pincode =document.getElementById("pincode")
    // let genter =document.getElementById("malfemale")
    // let gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
   
    // let foods =document.getElementById("foods")
    
    let state =document.getElementById("state")
    let country =document.getElementById("contry")
    let btn =document.getElementById("btnt")

    let tableFname = document.getElementById("tfirstname")
    let tableLname = document.getElementById("tlastname")
    let tablemail = document.getElementById("temailele")
    let tableaddress = document.getElementById("taddre")
    let tablepincode = document.getElementById("tpincode")
    let tablegenter = document.getElementById("tgent")
    let tablefoods = document.getElementById("tfood")
    let tablestate = document.getElementById("tstate")
    let tablecountry = document.getElementById("tcountry")


    btn.addEventListener('click',(ele)=>{
        ele.preventDefault()

         let gender;
          if(document.getElementById("male").checked==true) {
            gender = 'male' 
          }
          else if(document.getElementById("female").checked==true){
            gender = 'female'
          }
          else {
            gender=""
          }

          let food = document.getElementsByName("food");
          console.log(food)
          let foodres = "";
          for(let i=0;i<food.length;i++){
            if(food[i].checked){
              foodres += food[i].value + " ";
            }
          } 

          let foodresult = foodres.split(" ");



        tableFname.append(Fname.value)
        tableLname.append(Lname.value)
        tablemail.append(mail.value)
        tableaddress.append(address.value)
        tablepincode.append(pincode.value)
        tablegenter.append(gender)
        tablefoods.append(foodresult)
        tablestate.append(state.value)
        tablecountry.append(country.value)
    })
    
 
    

})