function gantiGambar() {
    var gambar = document.getElementById('gambar');
    var deskripsi = document.querySelector('.poppins-regular');

    
    if (deskripsi.style.display !== 'none') {
        
        deskripsi.style.display = 'none';
    } else {
        
        deskripsi.style.display = 'block';
    }

    
    if (gambar.src.endsWith('aset/logo.png')) {
     
        gambar.src = 'aset/image1.png';
    } else {
     
        gambar.src = 'aset/logo.png';
    }

    var loveYouText = document.createElement('p');
                loveYouText.textContent = 'Love You';
                loveYouText.classList.add('love-you');

               
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                loveYouText.style.textShadow = `0 0 10px rgb(${randomColor})`;

                document.querySelector('.Notes').appendChild(loveYouText);
}