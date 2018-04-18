function queue(){
    this.head = null;
    this.tail = null;
}

function node(value){
    this.value = value;
    this.next = null;
}

function enqueue(queue, value){
    var x = new node(value);
    if (queue.head === null){
        queue.head = x;
        queue.tail = x;
    }
    else {
        queue.tail.next = x;
        queue.tail = x;
    }
}

function dequeue(queue){
    if (queue.head === null){
        return "empty queue";
    }
    else {
        var value = queue.head.value;
        if (queue.head.next === null) {
            queue.head = null;
            queue.tail = null;
        }
        else {
            queue.head = queue.head.next;
        }
    }
    return value;
}

new_queue = new queue;
enqueue(new_queue, 1);
enqueue(new_queue, 2);
enqueue(new_queue, 3);
dequeue(new_queue);
console.log(new_queue);