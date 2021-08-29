function selectCard(card) {
    // code goes here to select a card  
    if(card=='card1'){
        document.getElementById('card1Selected').checked=true;
        document.getElementsByClassName('card1')[0].id="selected";
        document.getElementsByClassName('card2')[0].id="";
        document.getElementsByClassName('card3')[0].id="";
        var deletee = document.getElementById('delete').checked;
        if(deletee){
          var l1 = document.getElementById('selected').children[2].getElementsByTagName("li").length;
          console.log(l1)
        for(var i=0; i<l1; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementById('selected').children[2].children[i].children[0].style.display="";
      //console.log('style =',document.getElementById('selected').children[2].children[i].children[0].style.display)    
      //document.getElementById('selected').getElementById(btnId).style.display="";
          
        }
        var l2 = document.getElementsByClassName('card2')[0].getElementsByTagName("li").length;
        for(var i=0; i<l2; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card2')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        var l3 = document.getElementsByClassName('card3')[0].getElementsByTagName("li").length;
        for(var i=0; i<l3; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card3')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        }
       
    } else if(card=='card2'){
        document.getElementsByClassName('card2')[0].id="selected";
        document.getElementsByClassName('card1')[0].id="";
        document.getElementsByClassName('card3')[0].id="";
        var deletee = document.getElementById('delete').checked;
        if(deletee){
          var l1 = document.getElementById('selected').children[2].getElementsByTagName("li").length;
          console.log(l1)
        for(var i=0; i<l1; i++){
          document.getElementById('selected').children[2].children[i].children[0].style.display="";
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
        }
        var l2 = document.getElementsByClassName('card1')[0].getElementsByTagName("li").length;
        for(var i=0; i<l2; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card1')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        var l3 = document.getElementsByClassName('card3')[0].getElementsByTagName("li").length;
        for(var i=0; i<l3; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card3')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        }
    }else{
        document.getElementsByClassName('card3')[0].id="selected";
        document.getElementsByClassName('card2')[0].id="";
        document.getElementsByClassName('card1')[0].id="";
        var deletee = document.getElementById('delete').checked;
        if(deletee){
          var l1 = document.getElementById('selected').children[2].getElementsByTagName("li").length;
          console.log(l1)
        for(var i=0; i<l1; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementById('selected').children[2].children[i].children[0].style.display="";
        }
        var l2 = document.getElementsByClassName('card2')[0].getElementsByTagName("li").length;
        for(var i=0; i<l2; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card2')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        var l3 = document.getElementsByClassName('card1')[0].getElementsByTagName("li").length;
        for(var i=0; i<l3; i++){
          var btnId = String('deleteBtn'+(i+1))
          document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
          document.getElementsByClassName('card1')[0].getElementsByTagName("li")[i].children[0].style.display="none"
        }
        }
    } 
    var card = document.getElementById('selected');
    var text = card.getElementsByTagName('h2')[0].innerText;
    document.getElementById('edit').getElementsByTagName('input')[0].value = text;

}

function addWork() {
    // code goes here for add work mode
    var worktoBeAdded = document.getElementById('work').value;
    if(worktoBeAdded!=''){
      document.getElementById('work').value='';
      var ul = document.getElementById('selected').children[2];
      var l = document.createElement('LI');
      var btn = document.createElement('BUTTON')
      var t = document.createTextNode(worktoBeAdded);
      btn.innerHTML='X'
      btn.style.display="none"
      btn.onclick= function(){ deleteWork(this) }
      l.appendChild(btn);
      l.appendChild(t);
      ul.appendChild(l);
    }
    
}

function deleteWork(sender) {
    // code goes here to delete a work in a card
    console.log('here')
    // var deletee = sender.parentNode.parentNode.getElementsByTagName("button")[0];
    // console.log(deletee);
    //sender.parentNode.parentNode.removeChild(sender.parentNode);
    sender.parentNode.style.display="none";
    if(sender.id=='deleteBtn1'){
      selectCard('card1');
      //console.log(sender);
    }
      
}

function update() {
    // code goes here to update card title
    var cardTitle = document.getElementById('cardTitle').value;
    if(cardTitle!=''){
    document.getElementById('cardTitle').value='';
    var selected = document.getElementById('selected');
    selected.children[1].innerHTML=cardTitle;
    document.getElementById('addWork').checked=true;
    document.getElementById('edit').style.display="none";
    document.getElementById('add').style.display="block";
    }
    
}

function clearWorkList() {
    //code goes here to clear workList
    removeAllChildNodes(document.getElementsByClassName('card1')[0].getElementsByTagName('ul')[0]);
    removeAllChildNodes(document.getElementsByClassName('card2')[0].getElementsByTagName('ul')[0]);
    removeAllChildNodes(document.getElementsByClassName('card3')[0].getElementsByTagName('ul')[0]);
    document.getElementsByClassName('card1')[0].getElementsByTagName('ul')[0].value='';
    document.getElementsByClassName('card2')[0].getElementsByTagName('ul')[0].value='';
    document.getElementsByClassName('card3')[0].getElementsByTagName('ul')[0].value='';
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function changeMode() {
  // code goes here switch between add work, update card title and delete work
  var addWork = document.getElementById('addWork').checked
  var editTitle = document.getElementById('editTitle').checked
  var deletee = document.getElementById('delete').checked
  if(editTitle){
      document.getElementById('edit').style.display="block";
      document.getElementById('add').style.display="none";
      var card = document.getElementById('selected');
      var text = card.getElementsByTagName('h2')[0].innerText;
      document.getElementById('edit').getElementsByTagName('input')[0].value = text;
  }else if(addWork){
    document.getElementById('edit').style.display="none";
    document.getElementById('add').style.display="block";
  }else if(deletee){
    deleteMode()
  }
   
}

function deleteMode() {
  // code goes here for delete Mode
  document.getElementById('edit').style.display="none";
  document.getElementById('add').style.display="none";
  var l = document.getElementById('selected').children[2].getElementsByTagName("li").length;
      console.log(l)
    for(var i=0; i<l; i++){
      var btnId = String('deleteBtn'+(i+1))
      document.getElementById('selected').children[2].children[i].children[0].setAttribute('id',btnId)
      document.getElementById('selected').children[2].children[i].children[0].style.display="";
      //console.log("style =",document.getElementById('selected').children[2].children[i].children[0].style.display)
    }
  
    var l = document.getElementsByClassName('card1')[0].children[2].getElementsByTagName("li").length;
    console.log(l)
  for(var i=0; i<l; i++){
    var btnId = String('deleteBtn'+(i+1))
    document.getElementsByClassName('card1')[0].children[2].children[i].children[0].setAttribute('id',btnId)
    //console.log("style =",document.getElementById('selected').children[2].children[i].children[0].style.display)
  }

  var l = document.getElementsByClassName('card3')[0].children[2].getElementsByTagName("li").length;
    console.log(l)
  for(var i=0; i<l; i++){
    var btnId = String('deleteBtn'+(i+1))
    document.getElementsByClassName('card3')[0].children[2].children[i].children[0].setAttribute('id',btnId)
    //console.log("style =",document.getElementById('selected').children[2].children[i].children[0].style.display)
  }

  
}

function adjustDelete(){

}