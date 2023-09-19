var ul = document.getElementById('ul')


function sendbtn(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    ul.appendChild(li)
    a.value = ''
    var dbtn = document.createElement('button')
    var dbtntext = document.createTextNode('DELETE')
    dbtn.appendChild(dbtntext)
    li.appendChild(dbtn)
    dbtn.setAttribute('onclick', 'del(this)')
    var ebtn = document.createElement('button')
    var ebtntext = document.createTextNode('EDIT')
    ebtn.appendChild(ebtntext)
    li.appendChild(ebtn)
    ebtn.setAttribute('onclick', 'edit(this)')    
}

function deletebtn(){
    ul.innerHTML = ''
}

function del(e){
    e.parentNode.remove()
}

function edit(e){
    var a = prompt( 'Change the List Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}












