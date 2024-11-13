// Exercício 1: Somar Elementos do Array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Testes para sumArray
//console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
//console.log(sumArray([10, -10, 10])); // Deve exibir: 10


// Exercício 2: Encontrar o Maior Número
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Testes para findMax
//console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
//console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10


// Exercício 3: Contar Ocorrências de um Elemento
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

// Testes para countOccurrences
//console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
//console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2


// Exercício 4: Verificar se Todos os Elementos São Iguais
function allEquals(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

// Testes para allEquals
//console.log(allEquals([1, 1, 1])); // Deve exibir: true
//console.log(allEquals([1, 2, 1])); // Deve exibir: false


// Exercício 5: Remover Duplicatas
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Testes para removeDuplicates
//console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
//console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]


// Exercício 6: Encontrar a Média dos Elementos
function average(arr) {
    return sumArray(arr) / arr.length;
}

// Testes para average
//console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
//console.log(average([10, 20, 30])); // Deve exibir: 20


// Exercício 7: Mesclar Dois Arrays
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }
    return mergedArray;
}

// Testes para mergeArrays
//console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
//console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]


// Exercício 8: Retornar Elementos Pares
function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// Testes para getEvenNumbers
//console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
//console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]


// Exercício 9: Reverter um Array
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Testes para reverseArray
//console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
//console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]


// Exercício 10: Encontrar o Índice de um Elemento
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

// Testes para findIndex
//console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
//console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1