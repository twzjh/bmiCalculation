let genderBtn = document.querySelector('.gender');
let heightBtn = document.querySelector('.height');
let weightBtn = document.querySelector('.weight');

let calculateBtn = document.querySelector('.calculate');
let clearBtn = document.querySelector('.clear');
let result = document.querySelector('.result');

let tdAll = document.querySelectorAll('table tbody tr > td');
let tdAll_1 = document.querySelectorAll('.td-1');
let tdAll_2 = document.querySelectorAll('.td-2');
let tdAll_3 = document.querySelectorAll('.td-3');

function tdMale(){
    tdAll_1[doRowNew].style.backgroundColor = '#46A3FF'
    tdAll_2[doRowNew].style.backgroundColor = '#46A3FF'
}

function tdFemale(){
    tdAll_1[doRowNew].style.backgroundColor = '#FF79BC'
    tdAll_3[doRowNew].style.backgroundColor = '#FF79BC'
}

function tdWhite(){
    for (let i = 0 ; i < tdAll.length ; i ++){
        tdAll[i].style.backgroundColor = 'white' ;
    }
}

function maleBMI(){
    let BMI = weightBtn.value / (heightBtn.value / 100)**2;

    if (BMI < 20) {
        doRowNew = 0;
        tdMale();
    } else if (BMI > 20 && BMI <= 25){
        doRowNew = 1;
        tdMale();
    } else if (BMI > 25 && BMI <= 30){
        doRowNew = 2;
        tdMale();
    } else if (BMI > 30 && BMI <= 40){
        doRowNew = 3;
        tdMale();
    } else {
        doRowNew = 4;
        tdMale();
    }

    return BMI;
}

function femaleBMI(){
    let BMI = weightBtn.value / (heightBtn.value / 100)**2;

    if (BMI < 19) {
        doRowNew = 0;
        tdFemale();
    } else if (BMI > 19 && BMI <= 25){
        doRowNew = 1;
        tdFemale();
    } else if (BMI > 25 && BMI <= 30){
        doRowNew = 2;
        tdFemale();
    } else if (BMI > 30 && BMI <= 40){
        doRowNew = 3;
        tdFemale();
    } else {
        doRowNew = 4;
        tdFemale();
    }

    return BMI;
}

calculateBtn.addEventListener('click', function(){

    let gender = document.querySelector('input[name = "gender"]:checked');

    if(!gender){
    alert('請選擇性別');
    return;
    }

    if(heightBtn.value === '' || weightBtn.value === '' || heightBtn.value <= 0 || weightBtn.value <= 0){
    alert('請輸入有效的身高和體重');
    return;
    }

    tdWhite();

    if(gender.value === 'male'){
        let BMI = maleBMI();

        result.innerText = BMI.toFixed(2);
    }else{
        let BMI = femaleBMI();

        result.innerText = BMI.toFixed(2);
    }
});    

clearBtn.addEventListener('click', function(){
    let selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
    selectedGender.checked = false;
    }

    tdWhite();
    
    heightBtn.value = '';
    weightBtn.value = '';
    result.innerText = '';
});
