package demo;

import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {-15, 3, 17, -17, 7, 18, 20, 2, 1, 666, 50, 4};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("arr" + Arrays.toString(arr));
    }

    public static void quickSort(int[] arr,int start,int r){
        if(start < r){
            int q = partition(arr, start, r);
            quickSort(arr, start, q - 1);
            quickSort(arr, q + 1, r);
        }
    }

    public static int partition(int[]arr, int p, int r){
        int pivotVal = arr[r];
        int i = p - 1;
        for(int j = p; j <= r - 1; j ++){
            if(arr[j] < pivotVal){
                i += 1;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, r);
        return i + 1;
    }

    public static void swap(int[]arr, int i, int j){
        int temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

}
