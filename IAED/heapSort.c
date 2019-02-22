/*
In the first step, a heap is built out of the data. The heap is often placed
    in an array with the layout of a complete binary tree.
In the second step, a sorted array is created by repeatedly removing the largest
    element from the heap (the root of the heap), and inserting it into the array.
    The heap is updated after each removal to maintain the heap property.
    Once all objects have been removed from the heap, the result is a sorted array.


Worst case: O(n log n)

Best case: O(n log n)

*/



/*

Fixdown (indice i)
    verifica se i tem um filho maior que ele
    SE i tem um filho maior:
        troca i com o filho_maior
        Fixdown (pos_do_filho_maior)

*/

void fixDown(Item a[], int l, int r, int k){
    /* fixdown(k) num amontoado definido entre l e r */
    int ileft, iright, largest=k;

    ileft=l+left(k-l); /* filho esquerdo de k */
    iright=l+right(k-l); /* filho direito de k */

    if (ileft<=r && less(a[largest],a[ileft])){
        largest=ileft;
    }
    if (iright<=r && less(a[largest],a[iright])){
        largest=iright;
    }
    if (largest!=k){
        exch(a[k],a[largest]);
        fixDown(a, l, r, largest);
    }
}


void buildheap(Item a[], int l, int r){
    int k, heapsize = r-l+1;

    for (k = heapsize/2-1; k >= l; k--){
        fixDown(a, l, r, l+k);
    }
}

void heapsort(Item a[], int l, int r){

    buildheap(a,l,r);

    while (r-l > 0) {
        exch(a[l], a[r]);
        fixDown(a, l, --r, l);
    }
}

// Another implementation of heapSort from Geek for Geeks
// More info: https://www.geeksforgeeks.org/heap-sort/

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
void heapify(int arr[], int n, int i)
{
    int largest = i; // Initialize largest as root
    int l = 2*i + 1; // left = 2*i + 1
    int r = 2*i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i)
    {
        swap(arr[i], arr[largest]);
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}


// main function to do heap sort
void heapSort(int arr[], int n){
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (int i=n-1; i>=0; i--)
    {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[1] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

/*
Sources: https://en.wikipedia.org/wiki/Heapsort
         https://www.geeksforgeeks.org/heap-sort/
*/
