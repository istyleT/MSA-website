function myLoader() {
    let content = setTimeout(showPage, 2500);
}
function showPage() {
    document.getElementById("preLoader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
}