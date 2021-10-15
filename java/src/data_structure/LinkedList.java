package data_structure;

public class LinkedList {
    private Node head;
    private int length;

    public LinkedList(){
        super();
    }

    public Node getHead() {
        return head;
    }

    public void setHead(Node head) {
        this.head = head;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    @Override
    public String toString() {
        return "LinkedList{" +
                "head=" + head +
                ", length=" + length +
                '}';
    }

    public void printAll(){
        if(this.length == 0){
            System.out.println("No Value in this linked list");
            return;
        }
        var currentNode = this.head;
        for(var i = 0; i< this.length ; i ++){
            System.out.println("Value is " + currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }

    // add element to linked list
    public void push(Object value){
        var node = new Node(value);
        if(this.length == 0){
            this.head = node;
            this.length = 1;
            return;
        }

        var currentNode = this.head;
        for(var i = 1; i < this.length; i++){
            currentNode = currentNode.getNext();
        }

        currentNode.setNext(node);
        this.length ++;
    }

    //pop last element of linked list
    public Node pop(){
        if(this.length == 0){
            return null;
        }else if(this.length == 1){
            return this.head;
        }
        var currentNode = this.head;
        for(var i = 1; i < this.length - 1; i++){
            currentNode = currentNode.getNext();
        }
        var temp = currentNode.getNext();
        currentNode.setNext(null);
        this.length --;
        return temp;
    }

    // remove first element of linked list
    public Node shift(){
        if(this.length == 0){
            return null;
        }
        var headNode = this.head;
        this.head = headNode.getNext();
        this.length --;
        return headNode;
    }

    //insert element to first index of linked list return length of list
    public int unShift(Object value){
        if(this.length == 0){
            this.push(value);
            return this.length;
        }
        var currentNode = this.head;
        this.head = new Node(value);
        this.head.setNext(currentNode);
        this.length ++;
        return this.length;
    }

    public void insertAt(int index, Object value){
        if(index < 0 || index > this.length){
            return;
        }else if(this.length == 0){
            this.push(value);
            return;
        }else if(index == 0){
            this.unShift(value);
            return;
        }

        var currentNode = this.head;
        for(var i = 1; i<index; i++){
            currentNode = currentNode.getNext();
        }
        var oldNodeNext = currentNode.getNext();
        var node = new Node(value);
        currentNode.setNext(node);
        node.setNext(oldNodeNext);
        this.length ++;
    }

    public Node removeAt(int index){
        if(index >= this.length || index < 0){
            return null;
        }else if(index == 0){
            return this.shift();
        }else if(index == this.length - 1){
            return this.pop();
        }

        var currentNode = this.head;
        for(var i = 1; i < index; i++){
            currentNode = currentNode.getNext();
        }
        var nodeToBeRemoved = currentNode.getNext();
        var nextNode = currentNode.getNext().getNext();
        currentNode.setNext(nextNode);
        this.length --;
        return nodeToBeRemoved;
    }

    public Node get(int index){
        if(index < 0 || index >= this.length){
            return null;
        }else if(index == 0){
            return this.head;
        }

        var currentNode = this.head;
        for(var i = 1; i < index; i++){
            currentNode = currentNode.getNext();
        }
        return currentNode.getNext();
    }
}
