package data_structure;

public class Node {
    private Object value;
    private Node next;

    public Node(){}

    public Node(Object value) {
        this.value = value;
        this.next = null;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return "Node{" +
                "value=" + value +
                ", next=" + next +
                '}';
    }

    public String lastNodeToString() {
        return "Node{" +
                "value=" + value +
                ", next=" + null +
                '}';
    }
}
