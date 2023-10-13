var dropdown = document.getElementsByClassName("dropdown-btn");
var content = document.querySelector(".dropdown-content-1");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "none") {
            dropdownContent.style.display = "grid";

        } else {
            dropdownContent.style.display = "none";
        }
    });
}