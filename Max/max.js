// # April_2018_Qs

// 1. FORK this repo
// 2. CLONE your repo into your local machine
// 3. NAVIGATE INTO the project
// 4. ADD A DIRECTORY with your name
// 5. NAVIGATE INTO your directory
// 6. ADD A FILE with the following JavaScript code:
// * Object constructors for a Queue and a Node
// * Functions enqueue() and dequeue()
// * Instantiate a queue
// * Add three nodes to your queue
// * Dequeue from the queue
// 7. GIT ADD
// 8. GIT COMMIT
// 9. GIT PUSH
// 10. Send me a PULL REQUEST


function node(val){
    this.head = val;
    this.next = null;
}
var y = new node(1);
var q = new node(2);
var t = new node(3);


function queue(){
    this.head = null;
    this.tail = null;
}
var x = new queue();

function enqueue(queue, node){
    if (queue.head === null){
        queue.head = node;
        queue.tail = node;
    }
    else{
        queue.tail.next = node;
        queue.tail = node;
    }
} 
enqueue(x,y);
enqueue(x,q);
enqueue(x,t);

function dequeue(queue){
    if(queue.head === null){
        return false;
    }
    else if (queue.head == queue.tail) {
        var newb = queue.head
        queue.head.next = null;
        queue.tail.next = null;
    }
    else{
        temp = queue.head;
        queue.head = queue.head.next;
    }
    return temp;
}
dequeue(x);
console.log(x);