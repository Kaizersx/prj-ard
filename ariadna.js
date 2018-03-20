

window.addEventListener('load',regEvent,false);

function regEvent(e)


       {

    document.getElementById("Ariadna").addEventListener("click",funAriadna,false);

    document.getElementById("Doctrix").addEventListener("click",funDoctrix,false);

    document.getElementById("MSProject").addEventListener("click",funMSProject,false);
     
    document.getElementById("Other").addEventListener("click",funOther,false);

      }



     function  funAriadna(e){

document.getElementById("infoAr").style.display="block";

document.getElementById("infoDoc").style.display="none";

document.getElementById("infoMSProj").style.display="none";

document.getElementById("infoOther").style.display="none";

      }


    function  funDoctrix(e){

document.getElementById("infoAr").style.display="none";

document.getElementById("infoDoc").style.display="block";

document.getElementById("infoMSProj").style.display="none";

document.getElementById("infoOther").style.display="none";
      }


     function  funMSProject(e){
     	
document.getElementById("infoAr").style.display="none";

document.getElementById("infoDoc").style.display="none";

document.getElementById("infoMSProj").style.display="block";

document.getElementById("infoOther").style.display="none";

      }


   function   funOther(e){

document.getElementById("infoAr").style.display="none";

document.getElementById("infoDoc").style.display="none";

document.getElementById("infoMSProj").style.display="none";

document.getElementById("infoOther").style.display="block";

      }