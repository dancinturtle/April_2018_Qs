// * Object constructors for a Queue and a Node
// * Functions enqueue() and dequeue()
// * Instantiate a queue
// * Add three nodes to your queue
// * Dequeue from the queue
// 7. GIT ADD
// 8. GIT COMMIT
// 9. GIT PUSH
// 10. Send me a PULL REQUEST


function Queue() {
    this.head = null;
    this.tail = null;
}    
var x = new Queue();


function Node(value) {
    this.value = value;
    this.next = null;
}
var y = new Node(1);
var q = new Node(2);
var t = new Node(3);


function Enqueue(Queue,Node){
    if(Queue.head === null){
        Queue.head = Node;
        Queue.tail = Node;
    }
    else{
        Queue.tail.next = Node;
        Queue.tail = Node;
    }
}

Enqueue(x, y);
Enqueue(x, q);
Enqueue(x, t);

function Dequeue(Queue){
    if(Queue.head === null){
        return false;
    }
    else{
        temp = Queue.head;
        Queue.head = Queue.head.next;
    }
    return temp;
}
Dequeue(x);
console.log(x);