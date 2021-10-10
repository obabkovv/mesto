let profName = document.querySelector('.profile__name');
let profDesc = document.querySelector('.profile__desc');
let EditButton = document.querySelector('.profile__edit_button');
let CloseButton = document.querySelector('.form__button_close');
let SaveButton = document.querySelector('.form__button_save');
let overlay = document.querySelector('.overlay');
let form = document.querySelector('.form');
let InputProfileName = document.querySelector('.form__profile_name');
let ProfileName = document.querySelector('.profile__name');
let InputProfileDesc = document.querySelector('.form__profile_desc');
let ProfileDesc = document.querySelector('.profile__desc');
function EditProfile(){
    form.setAttribute('style', 'display: flex'); 
    overlay.setAttribute('style', 'display: block');
    InputProfileName.value = ProfileName.textContent;
    InputProfileDesc.value = ProfileDesc.textContent;
}
function CloseProfile(){
    form.setAttribute('style', 'display: none'); 
    overlay.setAttribute('style', 'display: none');
}
function SaveProfile(){
    ProfileName.innerHTML = InputProfileName.value;
    ProfileDesc.textContent = InputProfileDesc.value;
    CloseProfile();
}
 EditButton.addEventListener('click', EditProfile);
 CloseButton.addEventListener('click', CloseProfile);
 SaveButton.addEventListener('click', SaveProfile);
