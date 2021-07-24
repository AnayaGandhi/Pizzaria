Menu_list_array = ["Chiken Tandoori Pizza" , "Veg Supreme Pizza" , "Paneer Tikka Pizza" , "Deluxe Veggei Pizza" , "Veg Extravaganza Pizza"];
function getmenu(){
    var htmldata;
    htmldata = "<o1 class = menulist'>"
    Menu_list_array.sort();
    for(var i=0;i<Menu_list_array.length; i++){
        htmldata=htmldata+'<li>' + Menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</o1>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    Menu_list_array.push(item);
    Menu_list_array.sort();
    htmldata= '<section class="card">'
    for(var i=0;i<Menu_list_array.length; i++){
        htmldata=htmldata+'<div class="card">' +'<img src= "images/pizzaImg.png"/>' + Menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+'</secton>'
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}