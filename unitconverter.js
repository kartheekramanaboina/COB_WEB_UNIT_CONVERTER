
    function masscon()
    {
        let result;

        let inputValue =document.getElementById("inputValue").value;

        let mfromUnit =document.getElementById("mfromUnit").value;

       let mtoUnit =document.getElementById("mtoUnit").value;
     if (mfromUnit === "p" && mtoUnit === "g") {
        result =inputValue*453.6;
     }

    else if (mfromUnit === "p" && mtoUnit === "t") {
        result = inputValue/2205;
    }
    else if (mfromUnit === "p" && mtoUnit === "k") {
        result = inputValue*0.454;
    }
    else if (mfromUnit === "k" && mtoUnit === "g") {
        result = inputValue*1000;
    }
    else if (mfromUnit === "k" && mtoUnit === "p") {
        result =inputValue*2.2046;
    }
    else if (mfromUnit === "k" && mtoUnit === "t") {
        result = inputValue*0.0011;
    }
    else if (mfromUnit === "g" && mtoUnit === "k") {
        result = inputValue/1000;
    }
    else if (mfromUnit === "g" && mtoUnit === "t") {
        result = inputValue/1000000;
    }
    else if (mfromUnit === "g" && mtoUnit === "p") {
        result =inputValue/453.6;
    }
    else if (mfromUnit === "t" && mtoUnit === "k") {
        result = inputValue*1000;
    }
    else if (mfromUnit === "t" && mtoUnit === "p") {
        result =inputValue*2205;
    }
    else if (mfromUnit === "t" && mtoUnit === "g") {
        result =inputValue*1000000;
    }
    
    else {
             result = inputValue; // No conversion needed
       }
        document.getElementById("result").innerHTML =result.toFixed(4);

    }

    function tempcon()
    {
        let result;

        let inputValue =document.getElementById("inputValue").value;

        let tfromUnit =document.getElementById("tfromUnit").value;

       let ttoUnit =document.getElementById("ttoUnit").value;
    if (tfromUnit === "f" && ttoUnit === "c") {
        result = (inputValue-32)*(5/9);
    }
    else if (tfromUnit === "f" && ttoUnit === "k") {
        result = (inputValue-32)*(5/9)+273.15;
    }
    else if (tfromUnit === "c" && ttoUnit === "f") {
        result =inputValue*(9/5) + 32;
    }
    else if (tfromUnit === "c" && ttoUnit === "k") {
        result = inputValue + 273.15;
    }
    else if (tfromUnit === "k" && ttoUnit === "f") {
        result = (inputValue-273.15)*(9/5) + 32;
    }
    else if (tfromUnit === "k" && ttoUnit === "c") {
        result = inputValue - 273.15;
    }
    else {
             result = inputValue; // No conversion needed
       }
        document.getElementById("result").innerHTML =result.toFixed(4);

    }
    function timecon()
    {
        let result;

        let inputValue =document.getElementById("inputValue").value;

        let tifromUnit =document.getElementById("tifromUnit").value;

       let titoUnit =document.getElementById("titoUnit").value;
    if (tifromUnit === "m" && titoUnit === "s") {
        result = inputValue*60;
    }
    else if (tifromUnit === "s" && titoUnit === "m") {
        result = inputValue/60;
    }
    else if (tifromUnit === "h" && titoUnit === "m") {
        result =inputValue*60;
    }
    else if (tifromUnit === "m" && titoUnit === "h") {
        result = inputValue/60;
    }
    else if (tifromUnit === "h" && titoUnit === "s") {
        result = inputValue*3600;;
    }
    else if (tifromUnit === "s" && titoUnit === "h") {
        result =inputValue/3600;
    }
    else {
             result = inputValue; // No conversion needed
       }
        document.getElementById("result").innerHTML =result.toFixed(4);

    }
      function con()
            {
              let type=document.getElementById("type").value;
            if(type=="tem")
            {
                document.getElementById("temperature").style.display="block";
                document.getElementById("length").style.display="none";
                document.getElementById("time").style.display="none";
                document.getElementById("mass").style.display="none";
           }
           else if(type=="tm")
           {
               
                document.getElementById("temperature").style.display="none";
                document.getElementById("length").style.display="none";
                document.getElementById("time").style.display="block";
                document.getElementById("mass").style.display="none";
               }
               else if(type=="ma")
           {
               
                document.getElementById("temperature").style.display="none";
                document.getElementById("length").style.display="none";
                document.getElementById("time").style.display="none";
                document.getElementById("mass").style.display="block";
               }
              
           
           else
           {
             
                document.getElementById("temperature").style.display="none";
                document.getElementById("length").style.display="block";
                 document.getElementById("time").style.display="none";
                 document.getElementById("mass").style.display="none";
                 
          }
          }
 
     
function convert() {
// Retrieve input values
            let type=document.getElementById("type").value;
     
let inputValue =
document.getElementById("inputValue").value;

let fromUnit =
document.getElementById("fromUnit").value;

let toUnit =
document.getElementById("toUnit").value;

// Convert the length based on the selected units
let result;
         
if (fromUnit === "cm" && toUnit === "inch") {
result = inputValue / 2.54;
} else if (fromUnit === "inch" && toUnit === "cm") {
result = inputValue * 2.54;
} else if (fromUnit === "cm" && toUnit === "feet") {
result = inputValue / 30.48;
} else if (fromUnit === "feet" && toUnit === "cm") {
result = inputValue * 30.48;
} else if (fromUnit === "cm" && toUnit === "meter") {
result = inputValue / 100;
} else if (fromUnit === "meter" && toUnit === "cm") {
result = inputValue * 100;
} else if (fromUnit === "inch" && toUnit === "feet") {
result = inputValue / 12;
} else if (fromUnit === "feet" && toUnit === "inch") {
result = inputValue * 12;
} else if (fromUnit === "inch" && toUnit === "meter") {
result = inputValue * 0.0254;
} else if (fromUnit === "meter" && toUnit === "inch") {
result = inputValue / 0.0254;
} else if (fromUnit === "feet" && toUnit === "meter") {
result = inputValue * 0.3048;
} else if (fromUnit === "meter" && toUnit === "feet") {
result = inputValue / 0.3048;
} else if (fromUnit === "cm" && toUnit === "yard") {
result = inputValue / 91.44;
} else if (fromUnit === "yard" && toUnit === "cm") {
result = inputValue * 91.44;
} else if (fromUnit === "cm" && toUnit === "mile") {
result = inputValue / 160934.4;
} else if (fromUnit === "mile" && toUnit === "cm") {
result = inputValue * 160934.4;
} else if (fromUnit === "cm" && toUnit === "kilometer") {
result = inputValue / 100000;
} else if (fromUnit === "kilometer" && toUnit === "cm") {
result = inputValue * 100000;
} else if (fromUnit === "inch" && toUnit === "yard") {
result = inputValue / 36;
} else if (fromUnit === "yard" && toUnit === "inch") {
result = inputValue * 36;
} else if (fromUnit === "inch" && toUnit === "mile") {
result = inputValue / 63360;
} else if (fromUnit === "mile" && toUnit === "inch") {
result = inputValue * 63360;
} else if (fromUnit === "inch" && toUnit === "kilometer") {
result = inputValue * 0.0000254;
} else if (fromUnit === "kilometer" && toUnit === "inch") {
result = inputValue / 0.0000254;
} else if (fromUnit === "feet" && toUnit === "yard") {
result = inputValue / 3;
} else if (fromUnit === "yard" && toUnit === "feet") {
result = inputValue * 3;
} else if (fromUnit === "feet" && toUnit === "mile") {
result = inputValue / 5280;
} else if (fromUnit === "mile" && toUnit === "feet") {
result = inputValue * 5280;
} else if (fromUnit === "feet" && toUnit === "kilometer") {
result = inputValue * 0.0003048;
} else if (fromUnit === "kilometer" && toUnit === "feet") {
result = inputValue / 0.0003048;
} else if (fromUnit === "meter" && toUnit === "yard") {
result = inputValue * 1.09361;
} else if (fromUnit === "yard" && toUnit === "meter") {
result = inputValue / 1.09361;
} else if (fromUnit === "meter" && toUnit === "mile") {
result = inputValue / 1609.34;
} else if (fromUnit === "mile" && toUnit === "meter") {
result = inputValue * 1609.34;
} else if (fromUnit === "meter" && toUnit === "kilometer") {
result = inputValue / 1000;
} else if (fromUnit === "kilometer" && toUnit === "meter") {
result = inputValue * 1000;
} else if (fromUnit === "yard" && toUnit === "mile") {
result = inputValue / 1760;
} else if (fromUnit === "mile" && toUnit === "yard") {
result = inputValue * 1760;
} else if (fromUnit === "yard" && toUnit === "kilometer") {
result = inputValue / 1093.61;
} else if (fromUnit === "kilometer" && toUnit === "yard") {
result = inputValue * 1093.61;
} else if (fromUnit === "mile" && toUnit === "kilometer") {
result = inputValue * 1.60934;
} else if (fromUnit === "kilometer" && toUnit === "mile") {
result = inputValue / 1.60934;
}
 

 else {
result = inputValue; // No conversion needed
}

// Display the result
document.getElementById("result").innerHTML =
result.toFixed(4);
}
