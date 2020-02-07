// The next algorithms use recursion, which make us look at the execution time in a different way
// If you really wanna understand the execution times I strongly advise you to understand the first 2 points in the next link
// https://www.geeksforgeeks.org/analysis-algorithm-set-4-master-method-solving-recurrences/


// QUICK SORT

// Implementation from IST slides
void quicksort(int a[], int l, int r) {

    int i;
    if (r <= l) 
        return;

    i = partition(a, l, r); // i is the index where the inicial vector is divided, creating the left and right partition
    quicksort(a, l, i-1); // in the left(l) part of the inicial vector aka inicial left partition
    quicksort(a, i+1, r); // in the right(r) part of the inicial vector aka inicial right partition
}


int partition(int a[], int l, int r) {

    int i = l-1;
    int j = r;
    int pivot = a[r];
    while (i < j) {
        while (less(a[++i], pivot));    // if less == true then i moves forward to the right
        while (less(pivot, a[--j])) {   // if less == true then j moves backwards to the left
            if (j == l)                 // if j == i + 1 then it mean that the next iteration of the while, i and j have been crossed over one and another,
                break;                  // in this case we will not know how to identify the left partition and the right partition
        }
        if (i < j)
            exch(a[i], a[j]);
    }
    exch(a[i], a[r]); // places the pivot in the correct position of the final solution
    return i;
}


// https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort 

// Worst case running time is O(n²)
// Best case running time is O(n * log (2) n)
// Average case running time is O(n * log(2) n)


// https://www.youtube.com/watch?v=Hoixgm4-P4M
// http://me.dt.in.th/page/Quicksort/  visualize each step of the algorithm