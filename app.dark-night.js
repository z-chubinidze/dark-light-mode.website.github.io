//light mode

//input-ში ჩაწერილი ტექსტის წაშლა

var input = document.querySelector(".input");
function delet() {
    input.value = "";
}

// პაროლის ჩასაწერი ველში ტექსტის გამოჩენა და დამალვა


var x = false;
document.getElementById("eye2").style.display = "none";
function pasword() {

    if (x) {
        document.getElementById("password1").setAttribute("type", "password");
        document.getElementById("eye2").style.display = "none";
        document.getElementById("eye").style.display = "block";


        x = false;

    } else {
        document.getElementById("password1").setAttribute("type", "text")
        document.getElementById("eye2").style.display = "block";
        document.getElementById("eye").style.display = "none";
        x = true;
    }
};

// email validation

var inputEmail = document.querySelector(".input");
var inputpassword = document.getElementById("password1");

var pattern = /^[a-zA-Z0-9.!#$%'*+/=?^_{|}-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
var currentPlaceholder = inputEmail.getAttribute('placeholder');
function validation() {


    if (inputEmail.value.match(pattern)) {
        inputEmail.style.backgroundColor = "#EAF0F7";
        document.querySelector(".Xicon1").style.display = "block"
        document.querySelector(".Xicon2").style.display = "none"
        return true;

    } else {

        inputEmail.style.backgroundColor = "rgba(255, 222, 216, 1)";
        currentPlaceholder = "red";
        return false;
    }
}
function validpass() {

    const isRedColor = true;
    if (inputEmail.value == "") {
        if (isRedColor) {
            inputEmail.classList.add('input1');
        }
        inputEmail.style.backgroundColor = " rgba(255, 222, 216, 1)";
        inputEmail.style.color = "#4F555A";
        document.querySelector(".Xicon1").style.display = "none"
        document.querySelector(".Xicon2").style.display = "block"

    }

    if (inputpassword.value == "") {
        if (isRedColor) {
            inputpassword.classList.add('input1');
        }
        inputpassword.style.backgroundColor = " rgba(255, 222, 216, 1)";
        return true;
    } else {

        inputpassword.style.backgroundColor = "#EAF0F7";
        inputpassword.style.color = "#4F555A";
        
        return false;
    }
}

//night mode
//input-ში ჩაწერილი ტექსტის წაშლა

var input2 = document.querySelector(".input2");
function delet2() {
    input2.value = "";
}

// პაროლის ჩასაწერი ველში ტექსტის გამოჩენა და დამალვა


var x = false;
document.getElementById("eye22").style.display = "none";
function pasword2() {

    if (x) {
        document.getElementById("password2").setAttribute("type", "password");
        document.getElementById("eye22").style.display = "none";
        document.getElementById("eye12").style.display = "block";


        x = false;

    } else {
        document.getElementById("password2").setAttribute("type", "text")
        document.getElementById("eye22").style.display = "block";
        document.getElementById("eye12").style.display = "none";
        x = true;
    }
};

// email validation

var inputEmail2 = document.querySelector(".input2");
var inputpassword2 = document.getElementById("password2");

var pattern = /^[a-zA-Z0-9.!#$%'*+/=?^_{|}-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
var currentPlaceholder2 = inputEmail2.getAttribute('placeholder');
function validation2() {


    if (inputEmail2.value.match(pattern)) {
        inputEmail2.style.backgroundColor = "#EAF0F7";
        document.querySelector(".Xicon12").style.display = "block"
        document.querySelector(".Xicon22").style.display = "none"
        return true;

    } else {

        inputEmail2.style.backgroundColor = "rgba(255, 222, 216, 1)";
        currentPlaceholder2 = "red";
        return false;
    }
}
function validpass2() {

    const isRedColor = true;
    if (inputEmail2.value == "") {
        if (isRedColor) {
            inputEmail2.classList.add('input1');
        }
        inputEmail2.style.backgroundColor = " rgba(255, 222, 216, 1)";
        inputEmail2.style.color = "#4F555A";
        document.querySelector(".Xicon12").style.display = "none"
        document.querySelector(".Xicon22").style.display = "block"

    }

    if (inputpassword2.value == "") {
        if (isRedColor) {
            inputpassword2.classList.add('input1');
        }
        inputpassword2.style.backgroundColor = " rgba(255, 222, 216, 1)";
        return true;
    } else {

        inputpassword2.style.backgroundColor = "#EAF0F7";
        inputpassword2.style.color = "#4F555A";

        return false;
    }
}

//   light/night swich button

var btn = document.getElementById("btn")

function leftClick(){
    btn.style.left = "-1px"
    document.querySelector(".fluid-1").style.display = "block";
    document.querySelector(".fluid-2").style.display = "none";
    document.querySelector(".button-box").style.backgroundColor = "#000";
    document.querySelector(".toggle-btn").style.color = "#000";
    document.getElementById("btn").style.backgroundColor = "#3fee39";
}
function rightClick() {
    btn.style.left = "61px"
    document.querySelector(".fluid-1").style.display = "none";
    document.querySelector(".fluid-2").style.display = "block"
    document.querySelector(".button-box").style.backgroundColor = "#FFF";
    document.querySelector(".toggle-btn").style.color = "#000"
    document.getElementById("btn").style.backgroundColor = "red";

}