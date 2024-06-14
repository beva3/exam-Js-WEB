function Horloge(){
    let time = new Date();
    let h = time.getHours();
    let min = time.getMinutes();
    let s = time.getSeconds();
    
    // string date format
    if(h < 10)
        h = '0' + h;
    if(min < 10)
        min = '0' + min;
    if(s < 10)
        s = '0' + s;
    let hours_Now = h + ':' + min + ':' + s;
    
    // liaison avec html
    document.getElementById("Horloge").textContent = hours_Now;           
    // ! setInterval("Horloge()",1000);    
    // display console
    console.log(time,h,min,s);
    console.log(hours_Now);
}
setInterval("Horloge()",1000);// tsy maninona na eto aza
document.body.onload = Horloge();