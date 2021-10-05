package demo;

import java.util.Arrays;

public class SelectionSort {

    public static void main(String[] args) {
        int[] arr = {6, 4, 1, 3, 3, 9, 8, 11, 2};
        System.out.println("Before---" + Arrays.toString(arr));
        selectionSort(arr);
        System.out.println("After---" + Arrays.toString(arr));
    }

    public static void selectionSort(int[] arr){
        for(int i = 0; i < arr.length - 2; i++){
            int minIndex = i;
            for(int j = i + 1; j < arr.length; j++){
                int currentVal = arr[j];
                if(currentVal < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
