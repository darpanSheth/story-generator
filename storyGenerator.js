function showStory(form){
    var index;                         //index for representing an array of inputs from textfield 
    var inputsFromTextfileds;          //variable to hold an array of inputs from the textfields.
    var alterParagraph                 //variable to hold pargraph whose missing atext we need to alter with user inputs.

    index = 0;
    inputsFromTextfileds = form.elements["missingHoles"];
    alterParagraph = document.getElementById("para");
    
    while(index < inputsFromTextfileds.length){
        if(inputsFromTextfileds[index].value != ""){
           alterParagraph.children[index].innerHTML = inputsFromTextfileds[index].value;
           alterParagraph.children[index].className = "blue";
        }
            index++;
    }
    document.getElementById("story").style.display = "block";
    document.getElementById("story-generator").style.display = "none";
}

function showStoryInputs(){
    var changeBack;      //for changing the text and color of span elements back when user navigate back and change input values

    changeBack = document.getElementById("para").children;
    for(spanElements of changeBack){
        spanElements.className = "red";
        spanElements.innerHTML = "&lt;missing text&gt;";
    }
    document.getElementById("story").style.display = "none";
    document.getElementById("story-generator").style.display = "block";
}
