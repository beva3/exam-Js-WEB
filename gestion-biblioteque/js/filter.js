

// find book
function search(){
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');

    // alert('search');
    // print book
    // console.log(filter);
    for(let i=0 ; i<l.length ; i++){
        let a = items[i].getElementsByTagName('h3')[0];
        console.log('a = ',a);
        let value=a.innerHTML || a.innerTEXT || a.textContent;

        if(value.toUpperCase().indexOf(filter) >-1){
            items[i].style.display="";
        }else{
            items[i].style.display="none";
        }
    }
}