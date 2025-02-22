const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


window.onload = function () {
    Toast.fire({
        icon: "success",
        title: "Hi there! My name is <span class='text-danger'>Brian</span>.<br>I'm a Software Developer."
    });
};