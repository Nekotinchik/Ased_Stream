var modal = document.getElementById("myModal");
var body = document.getElementById("addonsBody");
var img = document.getElementsByClassName("addons-item__img");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

//TO DO event listeners
for (var i = 0; i < img.length; i++) {
    var thisImg = img[i];
    thisImg.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        body.style.overflow = "hidden";
        captionText.innerHTML = this.alt;
    };
}

span.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('close')) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
    });

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none'
    }
});
