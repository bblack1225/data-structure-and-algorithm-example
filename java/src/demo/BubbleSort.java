package demo;

import java.util.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int[] arr = {4, 6, 1, 3, 8, 9, 2, 11,5,5};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void bubbleSort(int[] arr){
        for(int i = 0; i<=arr.length - 2; i ++){
            boolean swapping = false;
            for(int j = arr.length - 1; j > i; j--){
                if(arr[j] < arr[j - 1]){
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swapping = true;
                }
            }
            if(!swapping){
                break;
            }
        }
    }
}
