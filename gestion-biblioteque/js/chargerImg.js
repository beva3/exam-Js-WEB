let prds = document.querySelector('.producti-list');
const infoBook ={
    "name":"../img/bd3.jpg",
    "title":"this is a title",
    "link":"this is about"
}

let book = (infoBook)=>{
    // ! creat elements
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h_3 = document.createElement('h3');
    let a = document.createElement('a');

    img.src=infoBook['name'];
    img.alt=infoBook['name'];

    h_3.innerText=infoBook['title'];
    a.href="#";
    a.innerText=infoBook['link'];
    
    div.appendChild(img);
    div.appendChild(h_3);
    div.appendChild(a);
    //! add class
    div.classList.add('product');
    img.classList.add('img');
    prds.appendChild(div);
    return div;

}
// const imgs = new Image();
// imgs.src='../img';
const imgs = FileReader("../img");
// console.log(imgs);
//TODO met div dans prds

// prds.appendChild(book(infoBook));
console.log(prds);