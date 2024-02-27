<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Art Gallery</title>
    <link rel="stylesheet" href="style.css"> <!-- External CSS file -->
</head>
<body>
    <div class="container">
        <div class="navigation">
            <div>
                <p>VICTOR GUERIN</p>
                <br><br> <!-- Two blank lines -->
                <a href="artistic_statement.html">Artistic Statement</a><br>
                <a href="mailto:victorguerin.fr+web@pm.me"><img src="email_icon.png" alt="Email"></a><br>
                <a href="https://www.instagram.com/victorguerin.fr/?hl=fr"><img src="instagram_icon.png" alt="Instagram"></a><br>
                <a href="https://www.linkedin.com/in/guerinvictor/"><img src="linkedin_icon.png" alt="LinkedIn"></a>
            </div>
            <div class="artwork-description">
                <p id="artwork-title">Titre de l'œuvre</p>
                <p id="artwork-material">Matériel</p>
                <p id="artwork-size">Taille</p>
                <p id="artwork-date">Date</p>
                <br>
                <a href="javascript:void(0);" id="prev">Prev</a>
                <a href="javascript:void(0);" id="next">Next</a>
            </div>
        </div>
        <div class="gallery">
            <div class="gallery-slide active">
                <img src="Natures_chromatic_symphony.jpg" alt="Artwork 1">
            </div>
            <div class="gallery-slide">
                <img src="victor0731.jpg" alt="Artwork 2">
            </div>
            <!-- Add more slides as needed -->
        </div>
    </div>

    <script src="script.js"></script> <!-- External JavaScript file -->
</body>
</html>
