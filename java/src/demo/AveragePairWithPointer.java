package demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AveragePairWithPointer {

    public static void main(String[] args) {
        int[] arr = {-21, -11, 0, 1, 2, 3, 9, 14, 17, 21, 24};
        double avg = 1.5;
        System.out.println(averagePair(arr,avg));
    }

    public static List<List<Integer>> averagePair(int[] arr, double avg){
        int left = 0;
        int right = arr.length - 1;
        List<List<Integer>> ans = new ArrayList<>();
        while(right > left){
            double val = (double) (arr[left] + arr[right]) / 2;
            if(avg > val){
                left ++;
            }else if(avg < val){
                right --;
            }else {
                ans.add(Arrays.asList(arr[left],arr[right]));
                right --;
                left ++;
            }
        }
        return ans;
    }
}
