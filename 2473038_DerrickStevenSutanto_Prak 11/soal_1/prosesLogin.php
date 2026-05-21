<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>2473038 - Derrick Steven Sutanto</title>
    <style>
        .pesan-berhasil {
            font-size: 24px;
            font-weight: bold;
        }
        .pesan-selamat {
            font-size: 24px;
            font-weight: bold;
        }
        .text-biru {
            color: blue;
        }
        .pesan-gagal {
            font-size: 24px;
            font-weight: bold;
            color: red;
        }
        a {
            font-size: 18px;
            color: #660099; 
        }
    </style>
</head>
<body>
    <?php     
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === "admin" && $password === "admin") {
        echo "<p class='pesan-berhasil'>Login berhasil!</p>";
        echo "<p class='pesan-selamat'>Selamat datang, <span class='text-biru'>" . htmlspecialchars($username) . "</span>.</p>";
        echo "<a href='index.html'>kembali ke halaman login</a>";
    } 
    else {
        echo "<p class='pesan-gagal'>Username : " . htmlspecialchars($username) . " Tidak Terdaftar!</p>";
        echo "<a href='index.html'>kembali ke halaman login</a>";
    }
    ?>
</body>
</html>