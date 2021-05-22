var menu=["Veggie Pizza", "Cheese Pizza", "Pepparoni Pizza", "Meat Pizza", "Margherita Pizza"]
function get_menu(){
    var x= document.getElementById("display_menu")
    if(x.style.display=="none"){
        x.style.display="block"
    var data
    data="<ol class='menu'>"
    menu.sort()
    for(var i=0;i<menu.length;i++){
        data=data+"<li>"+menu[i]+"</li>"
    }
    data=data+"</ol>"
    document.getElementById("display_menu").innerHTML=data
        }
    else{
        x.style.display="none"}
}
function add_item(){
    var data
    var item = document.getElementById("add_item").value
    menu.push(item)
    menu.sort()
    data = "<section class='cards'>"
    for(var i=0;i<menu.length;i++){
        data = data+"<div class='card'>"+"<img src='images/pizzaImg.png'>"+menu[i]+"</div>"
    }
    data = data+"</section>"
    document.getElementById("display_addedmenu").innerHTML=data
}
