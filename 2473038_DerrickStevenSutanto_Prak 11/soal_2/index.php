<?php include 'koneksi.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>2473038 - Derrick Steven Sutanto</title>
    <style>
        table { 
            width: 100%; 
            border-collapse: collapse; 
        }

        th {
            background: #c5c2c2;
        }
        th, td { 
            border-bottom: 1px solid #c5c2c2; 
            padding: 8px; 
        }
        
        .btn { 
            padding: 5px 10px; 
            color: white; 
            text-decoration: none; 
            border: none; 
        }

        .hijau { 
            background-color: #4CAF50; 
        }

        .biru { 
            background-color: #2196F3; 
        }

        .merah { 
            background-color: #f44336; 
        }
    </style>
</head>
<body>
    <div style="width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px;">
        <h3 style="text-align: center;">Data Siswa</h3>
        
        <a href="tambah.php" class="btn hijau">Tambah Data</a>
        <br><br>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Aksi</th>
            </tr>
            <?php
                $sql = "SELECT * FROM siswa";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>".$row["id"]."</td>
                                <td>".$row["nama"]."</td>
                                <td>".$row["kelas"]."</td>
                                <td>
                                    <a href='edit.php?id=".$row["id"]."' class='btn biru'>Edit</a>
                                    <a href='hapus.php?id=".$row["id"]."' class='btn merah' onclick='return confirm(\"Hapus?\")'>Hapus</a>
                                </td>
                            </tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>Tidak ada data</td></tr>";
                }
            ?> 
        </table>
    </div>
</body>
</html>