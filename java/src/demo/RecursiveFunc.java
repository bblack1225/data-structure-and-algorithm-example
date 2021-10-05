package demo;

public class RecursiveFunc {
    public static void main(String[] args) {
        System.out.println(recursiveNumberSum(3));
    }

    public static int recursiveNumberSum(int num){
        if(num == 0){
            return 0;
        }else if(num == 1){
            return 1;
        }
        return recursiveNumberSum(num - 1) + recursiveNumberSum(num - 2);
    }
}
