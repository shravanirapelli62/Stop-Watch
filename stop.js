let milisce=0;
let sec=0;
let min=0;
let hours=0;
let id;
let a=document.getElementsByTagName("span")
function start(){
    id=setInterval( () =>{
        console.log(milisce,sec,min,hours);
        a[0].innerHTML=hours.toString().padStart(2,0);
        a[1].innerHTML=min.toString().padStart(2,0);
        a[2].innerHTML=sec.toString().padStart(2,0);
        a[3].innerHTML=milisce.toString().padStart(2,0);

        milisce+=100;
        if(milisce==1000){
            milisce=0;
            sec+=1;
        }
        if(sec==60){
            sec=0;
            min+=1;
        }
        if(min==60){
            min=0;
            hours+=1;
        }
        if(hours==24){
            hours=0;
            
        }
    },100)
    }
 function pause(){
    clearInterval(id);
 }

 function reset(){
 milisce=0;
 sec=0;
 min=0;
 hours=0;

    a[0].textContent=hours.toString().padStart(2,0);
    a[1].textContentt=min.toString().padStart(2,0);
    a[2].textContent=sec.toString().padStart(2,0);
    a[3].textContent=milisce.toString().padStart(2,0);

 }
