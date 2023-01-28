function todo(){
let newp=document.createElement('p')
let value=document.getElementById('input').value
let addTextNode=document.createTextNode(value)
newp.appendChild(addTextNode)
newp.addEventListener('click',function(){
    newp.style.textDecoration='line-through'
})
newp.addEventListener('dblclick',function(){
    newp.removeChild(addTextNode)
})
if(value===''){
    alert('add new Task')
}
else{
    document.getElementById('list').appendChild(newp)
    
}
document.getElementById('input').value=''
}
