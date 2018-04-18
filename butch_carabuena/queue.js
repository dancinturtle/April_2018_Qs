function Queue(){
    this.head = null;
    this.tail = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

var NewQueue = new Queue;

function enQueue(Queue,value){
    var x = new Node(value);
    if(Queue.head===null){
        Queue.head = x;
        Queue.tail = x;
    }
    else{
        Queue.tail.next = x;
        Queue.tail = x;
    }
}

function deQueue(Queue){
    if(Queue.head===null){
        return Queue;
    }
    else{
        var temp = Queue.head.value;
        if(Queue.head === Queue.tail){
            Queue.head = null;
            Queue.tail = null;
        }
        else{
        Queue.head = Queue.head.next;
        }
    }
    return temp;
}


enQueue(NewQueue,1);
enQueue(NewQueue,2);
enQueue(NewQueue,3);
deQueue(NewQueue);
console.log(NewQueue);

