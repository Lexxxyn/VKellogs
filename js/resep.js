
// Tabbed Resep
function openResep(kategori) {
  var i, x, tablinks;

  x = document.getElementsByClassName("resep");
  for (i = 0; i < x.length; i++) {
    var kategoriResep = x[i].getAttribute("data-kategori");
    if (kategori === "semua" || kategori === kategoriResep) {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("red");
  }
  document.getElementById(kategori + "Link").classList.add("red");
}
document.getElementById("semuaLink").click();
