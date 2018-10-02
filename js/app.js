$(document).ready(function(){
   
    $('#btn').on('click',addItem);
    $('#tlist').on('change','.complete',completeItem);
    $('#tlist').on('click','.remove',removeItem);
    $('#tlist').on('click','.edit',editItem);
    $('#tlist').on('click','.update',updateItem);
    
    $('#input').on('keypress',function(event){
        if(event.which === 13){
            addItem();
            event.preventDefault();
        }
    });
})
    
    function addItem(event){
        var input= $('#input').val();
        if(input ==="")
             {
                 alert("Must enter some task!");
             }
        else{ 
                $('#tlist').append('<li><input class="complete" type="checkbox"><span class="todoText">' + input + '</span><input type="text" class="editText"><button type="button" class="update">Update</button><div class="buttons"><button class="edit"><span class="fas fa-edit"></span></button><button class="remove"><span class="fas fa-trash"></span></button></div></li>');
                 $('#input').val(""); 
            }
            
    }
    

    function removeItem(event)
    {
        $(this).parent().parent().remove();
        alert("Item deleted");
    }
    
    function completeItem(event)
    {
        $(this).parent().toggleClass('checked');
    }
    
     function editItem(event)
    {
        
        var currentText=$('.todoText').text();
        $('.editText').val(currentText);
        $('.editText').show();
        $('.update').show();
        
    }
    function updateItem(event)
    {
        var changedText=$('.editText').text();
        $('.todoText').val(changedText);
        $('.editText').hide();
        $('.update').hide();
    }
  
  
 /*

document.getElementById('btn').addEventListener('click',function(){
 var value=document.getElementById('input').value;
    if(value){
        
    }
    
})



    var form=document.getElementById("form");
    var input=document.getElementById("input");
    var btn=document.getElementById("btn");
    var tlist=document.getElementById("tlist");
    var id=1;
    tlistlist.addEventListener("click",boxchecked);
    btn.addEventListener("click",addTodo);
     
    function addTodo()
        {
         if (input.value === "")
             {
                 alert("Must enter some task!");
             }
            else{
                if(list.style.borderTop==="")
                    {
                        list.style.borderTop= "2px solid white";
                    }
                var text= input.value;
                var item=`<li id="li-${id}">$(text)
`                         <input id="box-${id}"
                            class="checkboxes" type="checkbox"></li>`;
                list.insertAdjacentHTML('beforeend',item);
                id++;
                form.reset();
            }
            
        }
    function boxchecked(event)
    {
        const element = event.Target;
        if(element.type === "checkbox")
            {
                element.parentNode.style.textDecoration="line-through";
            }
    }
    */
  