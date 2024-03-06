const menuIcon = document.querySelector(".header__menu-icon");
const backProjectBtn = document.querySelector(".mastercratf__button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close-modal");
const bookmarkContainer = document.querySelector(
    ".mastercratf__bookmark-container"
);
const bookmarkContainerIcon = document.querySelector(".bookmark-icon");
const bookmarkText = document.querySelector(".mastercratf__bookmark-text");
const bambooStandbtn = document.querySelector("[data-bamboo]");
const blackEditionBtn = document.querySelector("[data-black-edition]");
const modalPledgeContainer = document.querySelectorAll(".modal__pledges");
const noRewardCheckbox = document.querySelector("#no-reward");
const bambooCheckbox = document.querySelector("#bamboo-stand");
const blackEditionCheckbox = document.querySelector("#black-edition");
const enterPledge = document.querySelectorAll(".modal__enter-pledge");
const confirmPledge = document.querySelectorAll(".modal__confirm-pledge");
const thankYouPage = document.querySelector(".ty");
const thankYouBtn = document.querySelector(".thank-you__button");
const twentyFivePledge = document.querySelector("[data-25]");
const seventyFivePledge = document.querySelector("[data-75]");
const progressBar = document.querySelector(".green-part");
let numbersBacked = document.querySelector("#backed-number");
let totalBackers = document.querySelector(".numbers__total-backers");

menuIcon.addEventListener("click", () => {
    let imgSource = menuIcon.getAttribute("src");
    imgSource == "images/icon-hamburger.svg"
        ? menuIcon.setAttribute("src", "images/icon-close-menu.svg")
        : menuIcon.setAttribute("src", "images/icon-hamburger.svg");
});

backProjectBtn.addEventListener("click", () => {
    noRewardCheckbox.checked = false;
    bambooCheckbox.checked = false;
    blackEditionCheckbox.checked = false;
    modal.style.display = "flex";
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

bookmarkContainer.addEventListener("click", () => {
    let imgSource = bookmarkContainerIcon.getAttribute("src");
    if (imgSource == "images/icon-bookmark.svg") {
        bookmarkContainerIcon.setAttribute(
            "src",
            "images/icon-bookmark-green.svg"
        );
        bookmarkText.classList.add("bookmark-active");
        bookmarkText.innerHTML = `Bookmarked`;
    } else {
        bookmarkContainerIcon.setAttribute("src", "images/icon-bookmark.svg");
        bookmarkText.classList.remove("bookmark-active");
        bookmarkText.innerHTML = `Bookmark`;
    }
});

bambooStandbtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    modalPledgeContainer[1].classList.add("border-active");
    bambooCheckbox.checked = true;
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
        enterPledge[1].style.display = "grid";
    } else {
        enterPledge[1].style.display = "flex";
    }
});

blackEditionBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    modalPledgeContainer[2].classList.add("border-active");
    blackEditionCheckbox.checked = true;
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
        enterPledge[2].style.display = "grid";
    } else {
        enterPledge[2].style.display = "flex";
    }
});

noRewardCheckbox.addEventListener("change", () => {
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    modalPledgeContainer[0].classList.toggle("border-active");
    enterPledge[0].style.display = "flex";
});

bambooCheckbox.addEventListener("change", () => {
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    modalPledgeContainer[1].classList.toggle("border-active");
    if (window.matchMedia("(min-width: 768px)").matches) {
        enterPledge[1].style.display = "grid";
    } else {
        enterPledge[1].style.display = "flex";
    }
    twentyFivePledge.focus();
});

blackEditionCheckbox.addEventListener("change", () => {
    enterPledge.forEach((form) => {
        form.style.display = "none";
    });
    modalPledgeContainer.forEach((container) => {
        container.classList.remove("border-active");
    });
    modalPledgeContainer[2].classList.toggle("border-active");
    if (window.matchMedia("(min-width: 768px)").matches) {
        enterPledge[2].style.display = "grid";
    } else {
        enterPledge[2].style.display = "flex";
    }
    seventyFivePledge.focus();
});

thankYouBtn.addEventListener("click", () => {
    thankYouPage.style.display = "none";
});

confirmPledge.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
        thankYouPage.style.display = "flex";
    });
});

confirmPledge[0].addEventListener("click", () => {
    updateBackers();
});

confirmPledge[1].addEventListener("click", () => {
    updateNumbers(twentyFivePledge);
});

confirmPledge[2].addEventListener("click", () => {
    updateNumbers(seventyFivePledge);
});

function updateNumbers(input) {
    let backedNumberString = numbersBacked.innerHTML;
    let backedNumber = parseFloat(backedNumberString.replace(",", ""));
    let updated = parseFloat(backedNumber) + parseFloat(input.value);
    let updatedFormatted = updated.toLocaleString().replace(".", ",");
    numbersBacked.innerHTML = `${updatedFormatted}`;
    updateBackers();
    updateProgressBar();
}

function updateBackers() {
    let totalBackersString = totalBackers.innerHTML;
    let totalBackersNumber = parseFloat(totalBackersString.replace(",", ""));
    let updatedTotalBackers = parseFloat(totalBackersNumber) + 1;
    let updatedBackersFormatted = updatedTotalBackers
        .toLocaleString()
        .replace(".", ",");
    totalBackers.innerHTML = `${updatedBackersFormatted}`;
}

function updateProgressBar() {
    let total = 100000;
    let value = numbersBacked.innerHTML;
    let convertedValue = parseFloat(value.replace(",", ""));
    let currentValue = parseFloat(convertedValue);
    let bar = (currentValue / total) * 100;
    progressBar.style.width = `${bar}%`;
}
