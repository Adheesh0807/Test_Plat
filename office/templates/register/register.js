function confirmPassword() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("re_password").value;

    if (password !== confirm) {
        alert('Password not matched');
        return false;
    }

    return true;
}







