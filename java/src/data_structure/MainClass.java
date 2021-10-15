package data_structure;

public class MainClass {
    public static void main(String[] args) {
        LinkedList linkedList = new LinkedList();
        linkedList.push("Blake");
        linkedList.push("White");
        linkedList.push("Wayne");
        linkedList.push("James");
        linkedList.push("Owen");
        System.out.println(linkedList.get(4));
        linkedList.printAll();
    }
}
