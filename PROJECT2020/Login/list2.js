window.addEventListener("load",function(){ 
    GetBookings();
}); 
 
function GetBookings(){
    let url = 'https://api.sheety.co/0ac15c206744c39d619ade78db690364/member/registration';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.registration); 
      var bookings = document.getElementById("booking-list");   
      var bookingIds=[];
    
      for(var i = 0; i < json.registration.length; i++){   
        var gname = json.registration[i].name; //change
        var gemail = json.registration[i].emailplain; //change
        var gpassword = json.registration[i].passplain; //change
        var gid = json.registration[i].id;  
        var buttonId = "delete" + gid;
     
       let row = bookings.insertRow(bookings.rows.length); 
       row.insertCell(0).innerHTML = gid; 
       row.insertCell(1).innerHTML = gname; 
       row.insertCell(2).innerHTML = gemail; 
       row.insertCell(3).innerHTML = gpassword; 
       row.insertCell(4).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";; 


       
        bookingIds.push(buttonId);
      } 
       for(let j = 0; j < bookingIds.length; j++){  
        let el = document.getElementById(bookingIds[j]);  
         el.addEventListener("click", function (){  
           let theId = bookingIds[j].replace("delete","");  
           DeleteBooking(theId);
    
         });
       }
       
      
    }); 
    } 
      
    function DeleteBooking(id){  
      if(confirm("Are you sure you want to delete?")){ 
        let url = 'https://api.sheety.co/0ac15c206744c39d619ade78db690364/member/registration/' + id;
        fetch(url, {
         method: 'DELETE',
        })
            .then((response) => {  
                location.reload();
              });
      } else {  
          alert("Delete cancelled");
      }
   








