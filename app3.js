var butn = document.getElementById("submit");           // creates an object for our submit button so that we can easily refer to it later
var inputs = document.getElementById("userInputs");     // creates an object for our inputs so that we can easily refer to them later
var modbod = document.getElementById("modalBody");      // creates an object for our modal body so that we can easily refer to it later
var modclose = document.getElementById("closeBtn");     // creates an object for  our modal window close button so that we can refer to it later
var output = document.getElementById("myOutput");       //creates an object for our outputs paragraph so that we can easily change them later

butn.addEventListener("click", openModal);              // listens for clicks on our Submit Button
modclose.addEventListener("click", closeModal);         //listens for clicks on the modal close button
window.addEventListener("click", closeModal2);          // listens for clicks outside the modal contents as an alternative way to close the modal window (results window)


function openModal(){
    var ascending = numSort();                                            //calling the sorting function, which is down below

    if(ascending[0] == '' || ascending[1] == '' || ascending[2] == ''){                         //checking for missing numbers
        output.innerHTML = "It seems you are missing some numbers:" + "<br/>" +  ascending;

    }
    else{
        output.innerHTML = "Your sorted numbers are:" + "<br/>" + ascending;
    }
    modbod.style.display = "block";                                                         //displays the modal window

}

function closeModal(){ 
    modbod.style.display = "none";                               //makes the modal window invisible!
}

function closeModal2(e){                                        //closes the modal window if the eventlistener detects clicks anywhere outside of the modal content div
    if(e.target ==modbod){
        modbod.style.display = "none";
    }

}

function numSort(){     
    var myNums= [];                                             // array where we wil store inputs

    var len = inputs.elements.length - 1;                           // number of elements in the form minus 1 button, gives us the amount of total inputs   

    for(i=0;i<len;i++){
        
        myNums[i] = inputs.elements[i].value;                       //put inputs into our array
    }
    
    myNums.sort(function(a,b){                                      // and we sort using the built in sort function; note that it takes a comparing function as an input
        return a-b;
    });

    return myNums;
}

