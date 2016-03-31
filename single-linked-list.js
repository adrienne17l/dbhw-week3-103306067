function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;

};

SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  while (current) {
    if (current.data == data) {
      if (current == this.head) {
        this.head = current.next;
      }else if (current == this.tail)
      {
        this.tail = previous;
        this.tail.next = null;
      }else {
        previous.next = current.next
      }
      this.numberOfValues -- ;
    }else {
      previous = current;
    }
    current = current.next;
  }
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current){
    if(current.data === toNodeData){
      var node = new Node(data);
      if(current === this.tail){
        this.tail.next = node;
        this.tail = node;
      }else{
        node.next = current.next;
        current.next = node;
      }
      this.numberOfValues++;
    }
    current = current.next;
  }
 };

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

SinglyLinkedList.prototype.print = function() {
  var str = '';
  var current = this.head;
  while (current) {
    str += current.data+ ' ';
    current=current.next;
  }
  return str.trim();
};


module.exports = {
  SinglyLinkedList : SinglyLinkedList,
  Node : Node
};