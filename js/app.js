$(document).ready(function(){
   
    $('#btn').on('click',addItem);
    $('#tlist').on('change','.complete',completeItem);
    $('#tlist').on('click','.remove',removeItem);
    $('#tlist').on('click','.todoText',editItem);
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
                $('#tlist').append('<li><input class="complete" type="checkbox"><span class="todoText">' + input + '</span><input type="text" class="editText"><button type="button" class="update">Update</button><div class="buttons"><button class="remove"><span class="fas fa-trash"></span></button></div></li>');
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
       
        var currentText= $(this).parent().find('.todoText').text();
        $(this).parent().find('.editText').val(currentText);
        $(this).parent().find('.editText').show();
        $(this).parent().find('.todoText').hide();                           
        $(this).parent().find('.update').show();
        
    }
    function updateItem(event)
    {
        $(this).hide();
        var newValue=$(this).parent().find('.editText').val();
        $(this).parent().find('.editText').hide();
        $(this).parent().find('.todoText').text(newValue);
       $(this).parent().find('.todoText').show();  
        
    }
  
  
