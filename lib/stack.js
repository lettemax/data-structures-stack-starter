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

    pop(){
        // 5) Should not throw an error when calling pop on an empty stack
         // 6) Should return null if called on an empty stack
        if(this.length === 0) return null;
       
        // 7) Should reassign the top pointer to null if there is only one node in the stack
        else if(this.length === 1) this.top.next = null;

        // 8) Should reassign the top pointer to the node just below the top node for stacks of size two or greater
        let curr = this.top;
        this.top = curr.next;

        // 9) Should decrement the stack's length by one each time a node is removed from the stack
        this.length--;

        // 10) Should return the value of the node removed from the stack
        return curr.value;
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
