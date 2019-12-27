// MERGE SORT

// Implementation from IST slides
void mergesort(int a[], int l, int r) {
    
    int m = (r+l)/2;
    if (r <= l) 
        return;

    // Divides the inicial array into sub-arrays of 1 element size, each one of them
    mergesort(a, l, m);
    mergesort(a, m+1, r);

    // Once we get all the 1 element arrays, we merge them in the correct way (every merge gives a sorted array)
    merge(a, l, m, r);
}


int aux[maxN];
void merge(int a[], int l, int m, int r) {

    int i, j, k;

    // Construction of the auxiliar vector //
    for (i = m+1; i > l; i--)
        aux[i-1] = a[i-1];
    for (j = m; j < r; j++)
        aux[r+m-j] = a[j+1];

    // Connects and sorts each singular elements, starting from the left to the right     
    for (k = l; k <= r; k++) {
        if (less(aux[j], aux[i]))
            a[k] = aux[j--];
        else
            a[k] = aux[i++];
    }
}

// https://www.geeksforgeeks.org/merge-sort/

//Worst, Best and Average Case is O(n lg n)

// https://www.youtube.com/watch?v=4VqmGXwpLqc