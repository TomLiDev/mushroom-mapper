/** Custom JS written to support button click functions such as toast messages */

document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
    let button = document.getElementById("delete-find-button");
    button.addEventListener("click", myTrigger);
});

function myTrigger() {
    console.log("test csssssssssssssssssssssssss")
    const toast = new bootstrap.Toast(myDeleteFindToast)

    toast.show()
};

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}