// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------


/* 
Node Constructor
      - Should exist
      - Should be a function (ES6 classes are "special functions")
      - Should have "value" and "next" properties
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// properties
    // size
// methods:
    // push O(1)
    // pop  O(1)
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

}

exports.Node = Node;
exports.Stack = Stack;
