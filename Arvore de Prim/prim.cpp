#include <iostream>
#include <climits>
using namespace std;

#define V 5

int pesoMin(int peso[], bool agmIn[]){
    int min = INT_MAX;
    int indiceMin;
    for(int v = 0; v < V; v++){
        if(agmIn[v] == false && peso[v] < min){
            min = peso[v];
            indiceMin = v;
        }
    }
    return indiceMin;

}

void printAgm(int pai[], int grafo[V][V]){
    cout << "Vertice \tPeso\n";
    for(int i = 1; i < V; i++){
        cout << pai[i] << " - " << i << "\t" << grafo[i][pai[i]] << "\n";
    }

}

void agmPrim(int grafo[V][V]){
    int pai[V];
    int peso[V];
    bool agmIn[V];
    for(int i = 0; i < V; i++)
        peso[i] = INT_MAX, agmIn[i] = false;

    peso[0] = 0;
    pai[0] = -1;

    for(int temp = 0; temp < V - 1; temp++){
        int u = pesoMin(peso, agmIn);
        agmIn[u] = true;

        for(int v = 0; v < V; v++){
            if(grafo[u][v] && agmIn[v] == false && grafo[u][v] < peso[v]){
                pai[v] = u, peso[v] = grafo[u][v];
            }
        }
    }
    printAgm(pai, grafo);
}

int main(){
    int grafo[V][V] = { { 0, 2, 0, 6, 0 },
                        { 2, 0, 3, 8, 5 },
                        { 0, 3, 0, 0, 7 },
                        { 6, 8, 0, 0, 9 },
                        { 0, 5, 7, 9, 0 }};


    agmPrim(grafo);
    return 0;
}
