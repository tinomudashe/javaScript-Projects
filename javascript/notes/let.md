# let 

* Variables defined with let cannot be Redeclared
* Variables defined with let must be Declared before use
* Variables defined with let have Block Scope


## Block Scope

es6 javascript had only Global Scope and Function Scope
Es6 introduced two important new JavaScript Keywords: *let* and *const*
These two keywords provide Block Scope in javaScript.
Variables declared inside a { } block cannot be accessed from outside the block

## Redeclaring Variables

redeclaring a  variable using the var keyword can impose problems
redeclaring a variable inside a block will also redeclare the variable outside the block

## let Hosting

Variables defined with var are hoisted to the top and can be intializes at anytime

Meaning: You can use the variable before it is declare