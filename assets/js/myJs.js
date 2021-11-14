
// Food categories
let foodMenuList = document.querySelector('.food-item-wrap');
let foodCategory = document.querySelector('.food-category');
let categories = foodCategory.querySelectorAll('button');

Array.from(categories).forEach((item) => {
    item.onclick = (e) => {
        let currcat = foodCategory.querySelector('button.active');
        currcat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})

// menu mb 
document.querySelector('.menu-mb-bar').onclick = () => {
    document.querySelector('.menu-mb-bar').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active');
}

// Login modal
// Sign im
var modal = document.getElementById("signInModal");
var btnSignIn = document.getElementById("btnSignIn");
var btnClose = document.getElementsByClassName("close")[0];

btnSignIn.onclick = function () {
    modal.style.display = "block";
}

btnClose.onclick = function () {
    modal.style.display = "none";
}

// Sign up
var modal2 = document.getElementById("signUpModal");
var btnSignUp = document.getElementById("btnSignUp");
var btnClose2 = document.getElementsByClassName("close2")[0];

btnSignUp.onclick = function () {
    modal2.style.display = "block";
}

btnClose2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Btn Back to top 
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("btn-back-to-top").style.display = "block";
    } else {
        document.getElementById("btn-back-to-top").style.display = "none";
    }
}

document.getElementById('btn-back-to-top').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



// // Drop down toggle Subnav - Header 
// // Close the dropdown if the user clicks outside of it
// function dropDownSubnav() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
// window.onclick = function(event) {
//     if (!event.target.matches('#btn-dropdown')) {
//       var dropdowns = document.getElementsByClassName("subnav");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

