let left = null, right = null, oper = null, equal = false, res = null;

/* save 함수
left, right, operator 값이 존재할때 input 필드에 적용시켜주는 함수
*/
function save() {
    const inp = document.getElementById("top-inp");
    let value = "";
    
    if (left === null)  return;
    value += left + " ";
    inp.value = value;
    if (oper === null)  return;
    value += oper + " ";
    inp.value = value;
    if (right === null)  return;
    value += right + " ";
    inp.value = value;

    if (equal) {
        switch (oper) {
            case "+":
                res = parseInt(left) + parseInt(right);
                break;
            case "-":
                res = parseInt(left) - parseInt(right);
                break;
            case "*":
                res = parseInt(left) * parseInt(right);
                break;
            case "/":
                res = parseInt(left) / parseInt(right);
                break;
        }
        value += "= " + res;
        inp.value = value;
    }
}

function inputNum(num) {
    if (oper === null) {
        if (left === null) {
            left = `${num}`
        } else {
            if (num === 0 && parseInt(left) === 0)  return;
            left += `${num}`
        }
    } else {        
        if (right === null) {
            right = `${num}`
        } else {
            right += `${num}`
        }
    }
    console.log(left);
    save();
}

function inputOper(op) {
    if (left === null && op === "-") {
        left = '-';
        save();
        return;
    }
    if (left === "-" && op === "-")   return;
    if (op === "-" && oper !== null && right === null) {
        right = "-";
        save();
        return;
    }
    
    oper = op;
    save();
}

function inputEqual() {
    if (res) {
        left = res;
        right = null;
        res = null;
        oper = null;
        equal = false;
    }
    equal = true;
    save(); 
}