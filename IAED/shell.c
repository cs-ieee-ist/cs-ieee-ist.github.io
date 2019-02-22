/*
Shellsort is a generalization of insertion sort that allows the exchange of
items that are far apart. The idea is to arrange the list of elements so that,
starting anywhere, considering every hth element gives a sorted list.
Such a list is said to be h-sorted. Equivalently,
it can be thought of as h interleaved lists, each individually sorted.

Worst case: O(n*2)

Best case: O(n log n)

*/

#define key(A) (A)
#define less(A, B) (key(A) < key(B))
#define exch(A, B) { int t = A; A = B; B = t; }
#define compexch(A, B) if (less(B, A)) exch(A, B)

int shellSort(int arr[], int l, int r){
    int i, j;
    int gap = 1;
    while (gap <= (r-l)) {
        gap = 3*gap+1;
    }
    for ( ; gap > 0; gap /= 3){
        for (i = l+gap; i <= r; i++) {
            int j = i;
            int temp = arr[i];
            while (j >= l+gap && less(temp, arr[j-gap])) {
                arr[j] = arr[j-gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    return 0;
}


// Another implementation of shellSort from Geek for Geeks
// More info: https://www.geeksforgeeks.org/shellsort/

/* function to sort arr using shellSort */
int shellSort(int arr[], int n){
    // Start with a big gap, then reduce the gap
    for (int gap = n/2; gap > 0; gap /= 2){
        // Do a gapped insertion sort for this gap size.
        // The first gap elements a[0..gap-1] are already in gapped order
        // keep adding one more element until the entire array is
        // gap sorted
        for (int i = gap; i < n; i += 1){
            // add a[i] to the elements that have been gap sorted
            // save a[i] in temp and make a hole at position i
            int temp = arr[i];

            // shift earlier gap-sorted elements up until the correct
            // location for a[i] is found
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];

            //  put temp (the original a[i]) in its correct location
            arr[j] = temp;
        }
    }
    return 0;
}


/*
Sources: https://en.wikipedia.org/wiki/Shellsort
         https://www.geeksforgeeks.org/shellsort
*/
