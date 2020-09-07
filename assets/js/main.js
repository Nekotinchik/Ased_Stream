let modal = document.getElementById("myModal");
let body = document.getElementById("addonsBody");
let getImage = document.getElementsByClassName("addons-item__img");
let modalImg = document.getElementById("modal-image");
let captionText = document.getElementById("caption");
let closeButton = document.getElementsByClassName("close")[0];

for (let i = 0; i < getImage.length; i++) {
    let thisImg = getImage[i];
    thisImg.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('addons-item__img')) {
            modal.style.display = "flex";
            modalImg.src = this.src;
            body.style.overflow = "hidden";
            captionText.innerHTML = this.alt;
        }
    });
}

closeButton.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('close')) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
});

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
        body.style.overflow = "auto";
    }
});
