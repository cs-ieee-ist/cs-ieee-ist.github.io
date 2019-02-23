// BUBBLE SORT

// Implementation from IST slides
void bubble(int a[], int l, int r) {

    int i, j;
    for (i = l; i < r; i++)
        for (j = l; j < r-i; j++)
            compexch(a[j], a[j+1]);
}

// The worst case is equal to the best case O(n²), contradictory to the next example that will give, this algorithm has no stop condition, so it has to go through the 2 for's
// So it is n x n --> n²

// https://www.youtube.com/watch?v=xli_FI7CuzA

// BUBBLE SORT OPTIMIZATION

void bubble_optimized(int a[], int l, int r) {

    int i, j, done;
    for (i = l; i < r; i++){
        done=1;
        for (j = r; j > i; j--) {
            if (less(a[j], a[j-1])){
                exch(a[j-1], a[j]);
                done=0;
            }
        }
        if (done) break;
    }
}


// The worst case is O(n²)
// The best case is having the inicial array already sorted, since the algorithm, will only have to go through the 1º iteration of the first for, the break intruction
// will be activated, because the less comparation is always false and done remains with the value of 1. 
// So the best case is O(n * 1) witch means O(n)

// https://www.youtube.com/watch?v=32pF2cDbaSw where the "swapped" variable is our done variable