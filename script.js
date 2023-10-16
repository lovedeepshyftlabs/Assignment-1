var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownIcon = this.querySelector(".icon");
        var dropdownContent = this.nextElementSibling;

        if (dropdownIcon.classList.contains("transformation")) {
            dropdownIcon.classList.remove("transformation");
            dropdownContent.style.maxHeight = null;
        }
        else {
            dropdownIcon.classList.add("transformation");
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        }
    });
}
