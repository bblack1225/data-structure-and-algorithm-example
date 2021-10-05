package demo;

import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args) {
        int[] arr = {6, 4, 1, 3, 3, 9, 8, 11, 2,1,20,13};
        int[] result = mergeSort(arr);
        System.out.println("result" + Arrays.toString(result));
    }

    public static int[] mergeSort(int[] arr){
        if(arr.length == 1){
            return arr;
        }

        int middle = arr.length / 2;
        int left[] = new int[middle];
        int right[] = new int[arr.length - middle];
        for(int i = 0; i < middle; i++){
            left[i] = arr[i];
        }
        for(int j = middle; j < arr.length; j++){
            right[j - middle] = arr[j];
        }
        return merge(mergeSort(left), mergeSort(right));
    }

    public static int[] merge(int[] arr1, int[] arr2){
        int[] result = new int[arr1.length + arr2.length];
        int currentLength = 0;
        int i = 0;
        int j = 0;
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] > arr2[j]){
                result[currentLength] = arr2[j];
                j++;
            }else {
                result[currentLength] = arr1[i];
                i++;
            }
            currentLength++;
        }

        while(i < arr1.length){
            result[currentLength] = arr1[i];
            i++;
            currentLength++;
        }
        while (j < arr2.length){
            result[currentLength] = arr2[j];
            j++;
            currentLength++;
        }
        return result;
    }
}
