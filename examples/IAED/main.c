#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define maxN 10

#define key(A) (A)
#define less(A, B) (key(A) < key(B))
#define exch(A, B) {int t = A; A = B; B = t; }
#define compexch(A, B) if (less(B, A)) exch(A, B)


void selection(int a[], int l, int r);
void bubble(int a[], int l, int r);
void bubble_optimized(int a[], int l, int r);
void quicksort(int a[], int l, int r);
int partition(int a[], int l, int r);
void mergesort(int a[], int l, int r);
void merge(int a[], int l, int m, int r);
void f();

// this links will run the algorithms live

// https://visualgo.net/pt/sorting?slide=1
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/ 

int main() {

    // da-mos nesta main o ex da execucao do selection sort mas qualquer outro algoritmo vai ser chamado da mesma forma na main
    int a[] = {-6, -1, 9, 8, 7, 2, 5, 4, 3, 1};    
    selection(a, 0, 6);
    
    for (int i = 0; i < 7; i++)
         printf("%d", a[i]);
    
    return 0;
}