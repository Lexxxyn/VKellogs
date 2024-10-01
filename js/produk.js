
      // Tabbed Produk
      function openProduk(kategori) {
        var i, x, tablinks;
        x = document.getElementsByClassName("produk");
        for (i = 0; i < x.length; i++) {
          var kategoriProduk = x[i].getAttribute("data-kategori");
          if (kategori === "semua" || kategori === kategoriProduk) {
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