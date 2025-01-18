const output = document.getElementById("output")

function addToDisplay(input){
    output.value += input;
    console.dir(output);
}
function clearD(){
    output.value = "";
    
}
function calculate(){
    try{
        output.value = eval(output.value);
    } catch(error){
        clearD();
        output.value = "eroor";
    }
}
