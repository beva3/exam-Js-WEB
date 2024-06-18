let filter = document.getElementById('find').value.toUpperCase();
let items = document.querySelectorAll('.product');
let l = document.getElementsByTagName('h3');

// find book
function search(){
    // alert('search');
    for(let i ; i<l.length ; i++){
        let a = items[i].getElementsByTagName('h3')[0];
        let value=a.innerHTML || a.innerTEXT || a.textContent;

        if(value.toUpperCase().indexOf(filter) >-1){
            items[i].style.display="";
        }else{
            items[i].style.display="none";
        }
    }
}