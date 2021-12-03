// Courtesy of Codewars
// Finished
// This was challenge was trivially easy, but it's been a while since I've had a reason to use 
// string interpolation (template literals). Anyway, it would be better to solve this with a switch
// statement, but I should have better things to do than refactor code like this. 


function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    }
    if (names.length === 1) {
        return `${names[0]} likes this`;
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}
console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Peter', 'John']));
console.log(likes(['Peter', 'Paul', 'Mary']));
console.log(likes(['Peter', 'Paul', 'Mary', 'Amy']));
