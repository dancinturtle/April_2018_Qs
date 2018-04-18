function Queue(){
   this.head = null;
   this.tail = null;
}

function Node(value) {
    this.value = value; 
    this.next = null;
}

function enqueue(value, q){
    var node = new Node(value);
    if (q.head == null){
       q.head = node;
       q.tail = node;
    }
    else {
        q.tail.next = node;
        q.tail = node; 
    } 
} 

function dequeue(q){
    if (q.head == null) {
        return 
    }
    else {
       var temp = q.head;
       q.head = q.head.next; 
       temp.next = null;
       return temp.value; 
    }    
}

function print_q(q){
    var arr = []
    var temp = q.head; 
    while (temp != null) {
        arr.push(temp.value)
        temp = temp.next
    }
    console.log(arr)
}

var q = new Queue();
print_q(q)
enqueue(1,q);
print_q(q)
enqueue(2,q);
print_q(q)
enqueue(3,q);
print_q(q)
dequeue(q);
print_q(q);



