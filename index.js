
while (1) {
    let input = prompt('enter your calculation').split(' ');
    let numerized = [];
    for (let i = 0; i < input.length; i++) {
        switch (i) {
            case 0:
                numerized.push(input[i]*1)
                break;
            case 1:
                numerized.push(input[i])
                break;
            default:
                numerized.push(input[i]*1)
                break;
        }
    
    }    
    if (!isNaN(numerized[0])&& numerized[1] === 'sqr') {
        square(numerized[0]);
    }else if(!isNaN(numerized[0]) && !isNaN(numerized[2])){
        switch (numerized[1]) {
    case '+':
        // add(Number(input[0]),Number(input[2]))
        break;
    case '-':
        // sub(Number(input[0]),Number(input[2]))
        break;
    case '/':
        // sub(Number(input[0]),Number(input[2]))
        break;
    case '*':
        // mul(Number(input[0]),Number(input[2]))
        break;
    case '^':
        // power(Number(input[0]),Number(input[2]))
        break;
    case '%':
        // mod(Number(input[0]),Number(input[2]))
        break;
    case 'sqr':
        // square(Number(input[0]))
        break;
    default:
        alert('invalid operator! try again');
        break;
}
    }else{
        alert('invalid input');
    }
}






// switch (calcArr[1]) {
//     case '+':
//         // add(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case '-':
//         // sub(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case '/':
//         // sub(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case '*':
//         // mul(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case '^':
//         // power(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case '%':
//         // mod(Number(input[0]),Number(input[2]))
//         calculator()
//         break;
//     case 'sqr':
//         // square(Number(input[0]))
//         calculator()
//         break;
//     default:
//         alert('invalid operator! try again');
//         calculator()
//         break;
// }

const add = (a, b) => {
    return a + b;
  };
  
  const sub = (a, b) => {
    return a - b;
  };
  const mul = (a, b) => {
    return a * b;
  };
  
  const div = (a, b) => {
    return a / b;
  };
  
  const square = (a) => {
    return Math.sqrt(a);
  };
  
  const power = (a, b) => {
    return Math.pow(a, b);
  };
  
  const mod = (a, b) => {
    return a % b;
  };
  

