function Node(attr){
    this.val= attr;
    this.next =null;
}

function Queue(){
    this.head = null ;
    this.tail = null;
}
queue1 = new Queue();

function enqueue(queue1, Node)
{
  var res = "";

  if (!queue1.head){
   
    queue1.head = Node;
    queue1.tail= Node;
   
  }
else
{
  queue1.tail.next = Node;
  queue1.tail = Node;
  res += Node.val;
}
console.log(queue1);
}


function dequeue(){
  
  
  if (!queue1.head){
   console.log ("list empty");
  }
  else
  { 
     console.log ("list not empty");
     console.log(queue1);
  
    var removed = queue1.head;
    if (queue1.head.next !== null){
    queue1.head = removed.next;
 
    }
    else
    {
       queue1.head= null;
    }
   
    console.log ("removed ", removed);
    removed=null;
  }
  
}

enqueue(queue1, 2);
enqueue(queue1, 6);
enqueue(queue1, 9);
dequeue(queue1);


