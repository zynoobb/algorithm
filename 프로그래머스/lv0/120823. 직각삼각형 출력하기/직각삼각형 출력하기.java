import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for(int i = 1 ; i <= n ; i ++) {
            String s = "*";
            s = s.repeat(i);
            System.out.println(s);
        }
    }
}