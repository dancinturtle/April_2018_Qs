function Node(value) {
	this.val = value;
	this.next = null;
	// return this
}
function Queue() {
	var head = null;
	var tail = null;
	// console.log(this)
	// return head
	// FIRST IN FIRST OUT
}
function enqueue(Queue, val) {
	var newNode = new Node(val);
	if (!Queue.head) {
		Queue.head = newNode;
		Queue.tail = newNode;
	} else {
		Queue.tail.next = newNode;
		Queue.tail = newNode;

	}
	// console.log(Queue.head)
	return Queue;
}
function dequeue(Queue) {
	if (!Queue.head){
		return false;
	} else {
		var takenhead = Queue.head;
		Queue.head = Queue.head.next;
		takenhead.next = null;
	}
	return takenhead
}