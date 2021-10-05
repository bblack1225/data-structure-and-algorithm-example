package demo;

import java.util.Arrays;

public class InsertionSort {

    public static void main(String[] args) {
        int[] arr = {6, 4, 1, 3, 3, 9, 8, 11, 2};
        System.out.println("Before---" + Arrays.toString(arr));
        insertionSort(arr);
        System.out.println("After---" + Arrays.toString(arr));
    }

    public static void insertionSort(int[] arr){
        for(int i = 1; i < arr.length; i ++){
            int key = i;
            int j = i - 1;
            while(j >= 0 && arr[j] > key){
                arr[j + 1] = arr[j];
                j -= 1;
            }
            arr[j + 1] = key;
        }
    }
}
