/*If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/
//My solution:

    function wordsToMarks(string){
    let alphabet ='0abcdefghijklmnopqrstuvwxyz';
    let result=0;
    for (i=0;i<string.length;i++){
        result +=alphabet.indexOf(string[i]);
    }
    return result;
}
console.log(wordsToMarks('i'));