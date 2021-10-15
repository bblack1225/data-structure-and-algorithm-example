package demo;

import java.util.Arrays;

public class HeapSort {


    public static void main(String[] args) {
        int[] arr = {15, 3, 17, 28, 20, 2, 1, 4, 16, 22};
        heapSort(arr,arr.length - 1);
    }
    public static void heapSort(int[] arr,int heapSize){
        buildMaxHeap(arr, heapSize);
        for(int i = arr.length - 1; i >= 0; i--){
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapSize --;
            maxHeapify(arr, 0, heapSize);
        }
        System.out.println("after arr" + Arrays.toString(arr));
    }

    public static void buildMaxHeap(int[] arr, int heapSize){
        for(int i = (arr.length / 2) - 1; i >= 0; i--){
           maxHeapify(arr, i,heapSize);
        }
    }

    public static void maxHeapify(int[] arr, int i,int heapSize){
        int l = i * 2 + 1;
        int r = i * 2 + 2;
        int largest = i;

        if(l <= heapSize && arr[l] > arr[i]){
            largest = l;
        }

        if(r <= heapSize && arr[r] > arr[largest]){
            largest = r;
        }

        if(largest != i){
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            maxHeapify(arr,largest,heapSize);
        }
    }


}
