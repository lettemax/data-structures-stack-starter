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

    push(value) {
        let newEl = new Node(value);
        if (this.length === 0) {
            this.top = newEl;
        } else {
            // get current top before we update it to new one
            let currTop = this.top;
            newEl.next = currTop;
            this.top = newEl;
        }
        this.length++;
        return this.length;
    }

}

let stack = new Stack();
stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      console.log(stack);

exports.Node = Node;
exports.Stack = Stack;
