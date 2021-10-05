package demo;

public class Palindrome {
    public static void main(String[] args) {
        System.out.println(isPalindromeStr("aabbada"));
    }

    public static boolean isPalindromeStr(String str){
        int left = 0;
        int right = str.length() - 1;
        while(right > left){
            if(str.charAt(left) != str.charAt(right)){
                return false;
            }
            right --;
            left ++;
        }
        return true;
    }
}
