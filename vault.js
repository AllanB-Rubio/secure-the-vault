/* Pseudocode Steps on solving this exercise :

-Generate a basic html layout with a title and background, dont worry about design until later
1. link js file to html file 

2.In the js file 
    
    3. Create and assign 3 variables (var, const, or let) using arithmetic operators 
    ( + , / , * ) that will equal the 3 codes in the combination. Which is (10-40-39)

    4. Each code must use a different arithmetic operator

    5. Create a string message that says: "You have received this message because you have been chosen to open an important vault. Here is the secret combination"

    6. The string message can be done using console.log(), alert(), or prompt().

    7. Display the combination on the html page using a dialog box to display text using a pop up dialog : alert ("message"); and alert (variable);

    -Use comments thoughout your code to keep track and explain steps in process

    -Test your code by opening file in chrome using live server tool from vscode

    -If time allows, polish website and make it look better
*/

// Create and assign 3 Variables with unique operators

const num1 = 5 + 5;
const num2 = 80 / 2;
const num3 = 3 * 13;

// Now create a variable that combines all three numbers
const secretCombo = (num1 + " " + num2 + " " + num3);

// Website promp to user 
prompt (" Accept Secret Message, Press OK to accept, Cancel to deny");

//If prompt accepted alert activates 
alert ("You have received this message because you have been chosen to open an important vault. Here is the secret combination");

// Secret Code Displays last
alert("Secret Code : " + secretCombo);









