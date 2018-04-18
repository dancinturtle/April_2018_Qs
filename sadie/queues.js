function queue(){
    this.head = null;
    this.tail = null;
}

function node(value) {
    this.val = value;
    this.next = null;
}

function enqueue(val, queue) {
    //case if queue is empty
    if (!queue.head){
        queue.head = new node(val);
        queue.tail = queue.head;
    }
    else {
        //Add new noe to end of queue
        queue.tail.next = new node(val);
        //reassign tail to last node (new node)
        queue.tail = queue.tail.next;
    }
}

function dequeue(queue) {
    //edge case if queue is empty
    if (queue.head == null) {
        return null;
    }

    //make a temp of the node to pop
    var temp = queue.head;
    //reassign head to second node (or null if one node in list)
    queue.head = queue.head.next;
    return temp.val;
}

// function print(queue) {
//     var runner = queue.head;
//     while (!runner) {
//         console.log(runner.val)
//         runner = runner.next;
//     }
// }


//TESTING
var newQueue = new queue();

enqueue(5, newQueue);
// print(newQueue);
enqueue(8, newQueue);
// print(newQueue);
enqueue(3, newQueue);
// print(newQueue);

console.log(newQueue);

var node1 = dequeue(newQueue);
console.log(node1);
// print(newQueue);






