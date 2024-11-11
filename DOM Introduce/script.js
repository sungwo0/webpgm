document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("change-intro");
    const extraInfo = document.getElementById("extra-info");

    button.addEventListener("click", function () {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
            button.textContent = "접기";
        } else {
            extraInfo.style.display = "none";
            button.textContent = "더 알아보기";
        }
    });
});
