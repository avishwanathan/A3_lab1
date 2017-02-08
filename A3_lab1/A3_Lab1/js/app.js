$(document).foundation();


(function() {
    "use strict"
    console.log("loaded");
    //variables
    var model1 = document.querySelector("#m1");
     var model2 = document.querySelector("#m2");
     var model3 = document.querySelector("#m3");
  
//function
    
    function content1() {
      document.getElementById("info1").innerHTML= "Mini 5 Door";
    document.getElementById("info2").innerHTML="22,240";
     document.getElementById("info3").innerHTML="The Mini Countryman was announced in January 2010, and formally launched at the 2010 Geneva Motor Show. It is the first Mini crossover SUV, and the first five-door model to be launched in the BMW-era. It is offered with a choice of two- or four-wheel drive (known as ALL4), and with 1.6 L petrol or diesel and 2.0 L diesel four-cylinder engines in various states of tune.[46] Sales started in September 2010 as a 2011 model-year vehicle.  The Countryman has a longer wheelbase, more interior room, and higher ground clearance than the Clubman. It uses the same engines as the Hatch/Clubman range, but with an optional all-wheel-drive powertrain (dubbed ) to allow minimal off-road and rugged terrain driving.[47] A six-speed manual transmission is standard on all models, with automatic transmission available on all petrol and diesel models except the 90 bhp One D.";
    }
    
    
    
     function content2() {
      document.getElementById("info1").innerHTML= "Mini 3 Door";
    document.getElementById("info3").innerHTML="20,990";
     document.getElementById("info3").innerHTML="The Mini Hatch, stylized as MINI hatch or MINI Hardtop in the US, is a three-door hatchback first introduced in late 2000, with a second generation launched in 2006 and a third generation model launched in 2014. A convertible version was introduced in 2004, with the second generation following in 2008.  The Mini is produced in Cowley, Oxfordshire, UK, at Plant Oxford, with additional capacity introduced in the Netherlands for the third generation model due by the summer of 2014. The Mini Hatch was the first model launched by BMW under the Mini marque after the original Mini was discontinued in 2000. The new model built by BMW is technically unrelated to the former.";
    }
    
     function content3() {
      document.getElementById("info1").innerHTML= "Mini Convertible";
    document.getElementById("info2").innerHTML="27,990";
     document.getElementById("info3").innerHTML="capacity. This unit features double overhead camshaft valve gear, 4 cylinder layout, and 4 valves per cylinder. It produces 181 bhp (184 PS/135 kW) of power at 5500 rpm, and maximum torque of 260 N·m (192 lb·ft/26.5 kgm) at 1600 rpm. The engine delivers its power through to the wheels via a 6 speed manual gearbox.";
    }
	//Listener
 
        model1.addEventListener("click",content1,false);
        model2.addEventListener("click",content2,false);
        model3.addEventListener("click",content3,false);

   
}
)();