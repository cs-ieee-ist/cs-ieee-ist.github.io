/*

Insertion sort iterates, consuming one input element each repetition,
and growing a sorted output list. At each iteration, insertion sort removes
one element from the input data, finds the location it belongs within the sorted
list, and inserts it there. It repeats until no input elements remain.

Time Complexity: O(n*2)

Best case: O(n)

*/

#define key(A) (A)
#define less(A, B) (key(A) < key(B))
#define exch(A, B) { int t = A; A = B; B = t; }
#define compexch(A, B) if (less(B, A)) exch(A, B)

int insertionSort(int arr[], int left, int right){
    int i, j;
    for (i = left+1; i <= right; i++) {
        int temp = arr[i];
        j = i-1;
        while (j >= left && less(temp, arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return 0;
}


// Another implementation of insertionSort from Geek for Geeks
// More info: https://www.geeksforgeeks.org/insertion-sort/
void insertionSort(int arr[], int n){
   int i, key, j;
   for (i = 1; i < n; i++){
       key = arr[i];
       j = i-1;

       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key){
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
}

/*
Sources: https://en.wikipedia.org/wiki/Shellsort
         https://www.geeksforgeeks.org/shellsort
*/
