window.onload = function() {
    return;
    Swal.fire({
        icon: 'info', // 警告圖示
        title: '<div class="mt-4 mb-4">🤓 Hi there!<br> I\'m <span class="text-danger">Brian</span>, a software developer.</div>',
        timer: 3500, // 5秒倒數計時
        timerProgressBar: true, // 顯示進度條
        showConfirmButton: true, // 顯示 OK 按鈕
        confirmButtonText: 'OK', // 按鈕文字
        allowOutsideClick: false, // 禁止點擊外部關閉
        confirmButtonColor: '#4A8079', // 按鈕顏色
    });
};