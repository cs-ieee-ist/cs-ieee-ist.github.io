// SELECTION SORT

// Implementation from IST slides
void selection(int array[], int l, int r) {

    int i, j;
    for (i = l; i < r; i++) {
        int min = i;
        for (j = i+1; j <= r; j++) {
            if (less(array[j], array[min]))
                min = j;
        }    
        exch(array[i], array[min]); 
    }
}

// The worst case is O(n²) for the case in witch we have an inversed sorted inicial array ex: [5,4,3,2,1]
// The best case is O(n²), equal to the worst, since the algorithm has to go through the complete array to identify the minimum in each iteration,
// which means it has to run through the entire range of each for, n x n --> n² 

// https://www.youtube.com/watch?v=g-PGLbMth_g