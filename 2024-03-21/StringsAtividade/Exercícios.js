// Exercício 1: Reverter uma String
function reverseString(str) {
    return str.split('').reverse().join('');
}
//console.log(reverseString("javascript")); 
//console.log(reverseString("hello"));      

// Exercício 2: Contar Vogais
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
//console.log(countVowels("OpenAI"));      
//console.log(countVowels("JavaScript"));  

// Exercício 3: Verificar Palíndromo
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
//console.log(isPalindrome("arara")); 
//console.log(isPalindrome("hello")); 

// Exercício 4: Contar Ocorrências de uma Letra
function countOccurrences(str, char) {
    return str.split('').filter(c => c === char).length;
}
//console.log(countOccurrences("banana", "a"));      
//console.log(countOccurrences("hello world", "l"));  

// Exercício 5: Extrair Iniciais
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
//console.log(getInitials("João Silva"));        
//console.log(getInitials("Maria Oliveira"));    

// Exercício 6: Converter para Snake Case
function toSnakeCase(str) {
    return str.toLowerCase().split(' ').join('_');
}
//console.log(toSnakeCase("Hello World"));          
//console.log(toSnakeCase("JavaScript is fun"));   

// Exercício 7: Primeira Letra Maiúscula de Cada Palavra
function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
//console.log(capitalizeWords("hello world"));    
//console.log(capitalizeWords("javaScript is awesome")); 

// Exercício 8: Remover Espaços Extras
function trimSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}
//console.log(trimSpaces("   JavaScript    é     divertido    "));
//console.log(trimSpaces("   Programação     é   interessante  ")); 

// Exercício 9: Substituir Caractere em String
function replaceChar(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
}
//console.log(replaceChar("hello world", "l", "z"));
//console.log(replaceChar("banana", "a", "o"));     
