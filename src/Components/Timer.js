import React,{useState,useEffect} from "react";
function Timer(){
    
    let array=["GAMENIGHT", "COOKING GONE WRONG", "LATE AT NIGHT", "MOVIE MARATHON"];
     const [change,setChange]=useState(array[0]);
       useEffect(()=>{
           loop();
       },[])

       function loop()
       {
           var i=0;
           setInterval(
               ()=>{
                   if(i==4)
                   {
                       i=0;
                   }
                   if(i<4)
                   {
                       setChange(array[i]);
                       i++;
                   }
               },2000)
       }
       return(
           <div>
               <h1 className="h1">{change}</h1>
           </div>
       )





    
}
export default Timer;