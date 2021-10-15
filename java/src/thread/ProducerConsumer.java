package thread;

import java.util.Random;
import java.util.concurrent.LinkedBlockingDeque;

public class ProducerConsumer {
    private LinkedBlockingDeque queue = new LinkedBlockingDeque(10);

    public void produce(String message) throws InterruptedException{
        System.out.println("produce message: " + message);
        queue.put(message);
    }

    public void consume() throws InterruptedException{
        System.out.println("consume message: " + queue.take());
    }

    public static void main(String[] args) throws InterruptedException{
        final ProducerConsumer producerConsumer = new ProducerConsumer();

        new Thread(()->{
            Random random = new Random();
            try {
                while (true){
                    producerConsumer.consume();
                    Thread.sleep(random.nextInt(300));
                }
            }catch (InterruptedException e){
                e.printStackTrace();
            }
        }).start();

        new Thread(()->{
            Random random = new Random();
            try {
                int counter = 0;
                while (true){
                    producerConsumer.produce("message" + counter++);
                    Thread.sleep(random.nextInt(1000));
                }
            }catch (InterruptedException e){
                e.printStackTrace();
            }
        }).start();
    }
}
