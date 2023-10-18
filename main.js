function adduser() {
    variable1_name = document.getElementById("firstpage").value;
    variable2_name = document.getElementById("scndpage").value;
    localStorage.setItem("keyword1", variable1_name);
    localStorage.setItem("keyword2", variable2_name);
    window.location="index2.html";
}