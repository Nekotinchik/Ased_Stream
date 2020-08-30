var modal = document.getElementById("myModal");
var body = document.getElementById("addonsBody");
var img = document.getElementsByClassName("addons-item__img");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {
    var thisImg = img[i];
    thisImg.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        body.style.overflow = "hidden";
        captionText.innerHTML = this.alt;
    };
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
};
