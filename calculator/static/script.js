const buttons = document.querySelectorAll(".numbers");
const result = document.querySelector("#result");

res = 0;
let a = "";
let b = "";
let ope = "";

const reset = () => {
    a = "";
    b = "";
    ope = "";
    res = 0;
    result.innerHTML = res;
}

const number = (value) => {
    if(ope === "")  {
        a += value;
        result.innerHTML = a;
    }
    else {
        b += value;
        result.innerHTML = b;
    }
}

const compute = () => {
    switch(ope) {
        case '+':
            res = parseInt(a) + parseInt(b);
            break;
        case '-':
            res = parseInt(a) - parseInt(b);
            break;
        case '*':
            res = parseInt(a) * parseInt(b);
            break;
        case '/':
            res = parseInt(a) / parseInt(b);
    }
    result.innerHTML = res;
}

const operation = (value) => {
    ope = value;
}

const decide = (value) => {
    if(value <= "9" && value >= "0")    {
        number(value);
    }
    else if(value === "C")   {
        reset();
    }

    else if(value === "=")   {
        compute();
    }
    else {
        operation(value);
    }
}

buttons.forEach(function (button) {
    button.addEventListener('click', function(){
        decide(button.innerHTML);
    });
});
