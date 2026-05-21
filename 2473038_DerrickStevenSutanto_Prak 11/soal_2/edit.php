<?php
include 'koneksi.php';
$id = $_GET['id'];
$sql = "SELECT * FROM siswa WHERE id=$id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Data Siswa</title>
    <style>
        .btn { padding: 5px 10px; color: white; text-decoration: none; border: none; cursor: pointer; }
        .hijau { background-color: #4CAF50; }
        .biru { background-color: #2196F3; }
    </style>
</head>
<body>
    <div style="width: 400px; margin: auto; border: 1px solid #ccc; padding: 20px;">
        <h3 style="text-align: center;">Edit Data Siswa</h3>
        
        <form action="proses_edit.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $data['id']; ?>">
            
            <label>Nama:</label><br>
            <input type="text" name="nama" style="width: 100%;" value="<?php echo $data['nama']; ?>" required><br><br>
            
            <label>Kelas:</label><br>
            <input type="text" name="kelas" style="width: 100%;" value="<?php echo $data['kelas']; ?>" required><br><br>
            
            <button type="submit" class="btn hijau">Update</button>
            <a href="index.php" class="btn biru">Kembali</a>
        </form>
    </div>
</body>
</html>