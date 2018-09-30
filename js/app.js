
$(document).ready(function(){
   
    $('#btn').on('click',addItem);
    $('#tlist').on('change','.complete',completeItem);
    $('#tlist').on('click','.remove',removeItem);
    
    function addItem(){
        var input= $('#input').val();
        $('#tlist').append('<li><input class="complete" type="checkbox">' + input + '<span class="fas fa- trash"</span></ li>');
         $('#input').val("");    
    }
    function removeItem()
    {
        $(this).parent().remove();
    }
    
    function completeItem()
    {
        $(this).parent().toggleClass('done');
    }
  });
/*
document.getElementById('btn').addEventListener('click',function(){
 var value=document.getElementById('input').value;
    if(value){
        
    }
    
});


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
  