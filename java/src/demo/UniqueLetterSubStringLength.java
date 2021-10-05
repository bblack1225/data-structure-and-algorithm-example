package demo;

import java.util.HashMap;
import java.util.Map;

public class UniqueLetterSubStringLength {
    public static void main(String[] args) {
        System.out.println(getMaxSubstringLength("aaaacdea"));
    }

    public static int getMaxSubstringLength(String s){
//        int start = 0;
//        int end = 0;
//        int maxLength = 0;
//        Map<Character,Integer> counter = new HashMap<>();
//
//        while(end < str.length()){
//            if(counter.get(str.charAt(end)) != null && counter.get(str.charAt(end)) > 0){
//                    Character currentChar = str.charAt(start);
//                    int val = counter.get(currentChar);
//                    counter.put(currentChar,val - 1);
//                    start++;
//            }else {
//                counter.put(str.charAt(end),1);
//                end ++;
//                int currentLength = end - start;
//                if(currentLength > maxLength){
//                    maxLength = currentLength;
//                }
//            }
//        }
//
//        return maxLength;
        int start=0, end=0,i=0;
        int currLen = 0, maxLen=0;
        //taking start,end, and moving pointer i to compare
        //each char between start and end is distinct or not!
        while(end<s.length()){
            if(i==end){
                //after A
                end++;
                currLen=end-start;
                maxLen=Math.max(currLen,maxLen);
                continue;
            }
            //after B it again starts from here:
            for(i=start;i<end;i++){
                if(s.charAt(i)!=s.charAt(end)) continue;
                    //Either loop ends here say A (all char distinct from start to end).

                else {
                    maxLen=Math.max(maxLen,end-start);
                    start=i+1; // shifting the start to the breaking point
                    end++;
                    break;
                    //Or loop ends here say B (Repeating char found)
                }
            }
        }
        return maxLen;
    }

}
