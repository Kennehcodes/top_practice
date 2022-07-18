//reverse triangle print function: 

//first we gather the maximum width of the triangle
//second we gather that data place it in a int variable
//next we will create a loop
//the loop will start at the number we chose, and count down to 0
//while the loop iterates, it will print one hash and a newline character (this is automatic)


function printReverseTriangle(width) {
    let hash = "#";
    //creates the first width of the triangle and prints out the width;
    //print row
    // make full hash
    let count = width;
    let hashHold = "";
    let sub = "";
    while (count !== 0){
        hashHold+=hash;
        count--;
    }

    var rows = width;
    var col = width;
    while (rows > 0) {
        rows--;
            //print columns 
            while (col > 0) {
                if (col === width) {
                    console.log(hashHold);
                    col--;
                } else { //this else statement prints out every line after the first row and negates the string to print out each col
                    sub = hashHold.substring(0, col);
                    console.log(sub);
                    col--;
                }
                    
            }
    }


}
printReverseTriangle(5);
