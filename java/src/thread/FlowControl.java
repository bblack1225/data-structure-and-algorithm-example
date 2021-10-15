package thread;

import java.util.concurrent.Flow;

public class FlowControl {

    private Object lock = new Object();

    private String message = null;

    public void produce(String message){
        System.out.println("Produce message: " + message);
        synchronized (lock){
            this.message = message;
            lock.notify();
        }
    }

    public void consume() throws InterruptedException{
        System.out.println("wait for message...");
        synchronized (lock){
            System.out.println("before wait");
            lock.wait();
            System.out.println("consume message: " + message);
        }
    }

    public static void main(String[] args) throws InterruptedException {
        final FlowControl flowControl = new FlowControl();

        new Thread(() -> {
            try {
                flowControl.consume();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();

        Thread.sleep(1000);

        new Thread(()->{
            flowControl.produce("Hello world");
        }).start();

//        Thread.sleep(1500);
//        new Thread(()->{
//            flowControl.produce("Hello world2");
//        }).start();
    }
}
