package thread;

public class DeadBlock {
    public static void main(String[] args) {
        Object obj1 = new Object();
        Object obj2 = new Object();

        Thread a = new Thread(()->{
                String threadName = Thread.currentThread().getName();
            synchronized (obj1){
                System.out.println(threadName + ":取得 obj1 的鎖");
                try{
                    Thread.sleep(1000);
                }catch (Exception e){
                    e.printStackTrace();
                }
                System.out.println(threadName + ":等待obj2的鎖");
                synchronized (obj2){
                    System.out.println(threadName + ":取得obj2的鎖");
                }
            }
        },"thread-a ");

        Thread b = new Thread(()->{
            String threadName = Thread.currentThread().getName();
            synchronized (obj2){
                System.out.println(threadName + ":取得 obj2 的鎖");
                try{
                    Thread.sleep(1000);
                }catch (Exception e){
                    e.printStackTrace();
                }
                System.out.println(threadName + ":等待obj1的鎖");
                synchronized (obj1){
                    try {
                        Thread.currentThread().wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(threadName + ":取得obj1的鎖");
                }
            }
        },"thread-b");

        a.start();
        b.start();
    }
}
