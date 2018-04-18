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
    if !(queue.head){
        queue.head = x;
        queue.tail = x;
    }
    else {
        queue.tail.next = x;
        queue.tail = x;
    }
}

function dequeue(queue){
    if !(queue.head){
        return "empty queue";
    }
    else {
        var value = queue.head.value;
        queue.head = queue.head.next;
    }
    return value;
}

new_queue = new queue;
enqueue(new_queue, 1);
enqueue(new_queue, 2);
enqueue(new_queue, 3);
dequeue(new_queue);
