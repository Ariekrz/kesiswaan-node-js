-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 05:31 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hubadci`
--

-- --------------------------------------------------------

--
-- Table structure for table `info_ekskul`
--

CREATE TABLE `info_ekskul` (
  `idInfoeskul` int(11) NOT NULL,
  `noIdGuru` int(5) NOT NULL,
  `nama_ekskul` varchar(225) NOT NULL,
  `preview_eskul` varchar(5000) NOT NULL,
  `informasi_eskul` varchar(5000) NOT NULL,
  `gambar` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info_ekskul`
--

INSERT INTO `info_ekskul` (`idInfoeskul`, `noIdGuru`, `nama_ekskul`, `preview_eskul`, `informasi_eskul`, `gambar`) VALUES
(1, 1, 'Ekstrakulikuler Basket', 'Bola basket adalah olahraga bola berkelompok yang terdiri dari dua tim dengan masing-masing tim berisi lima orang. Kedua tim tersebut saling bertanding untuk mencetak poin dengan memasukkan bola ke keranjang lawan sebanyak-banyaknya. Olahraga tersebut sangat populer di Amerika1.', 'Basket adalah olahraga bola besar yang bisa melatih otot tangan dan kaki, Eskstrakulikuler Basket ini dibimbing oleh Pak Alfian Rahman, Ekskul ini berlangsung setiap hari rabu sepulang sekolah dan selesai sore jam 18.00, untuk keanggotaan saat ini ada sebanyak 42 anggota.', ''),
(2, 2, 'Ekstrakulikuler Olahraga Tradisional', 'info sekilas tentang oltrad\r\n', 'info ekskul nya\r\n', ''),
(3, 3, ' Ekstrakulikuler volly', 'info sekilas', 'info eskkul nya\r\n', ''),
(4, 4, ' Ekstrakulikuler futsal', 'info sekilas', 'info ekskl nya\r\n', '');

-- --------------------------------------------------------

--
-- Table structure for table `nilai_eskul`
--

CREATE TABLE `nilai_eskul` (
  `IdNilaieskul` int(11) NOT NULL,
  `noIdPesertaDidik` int(5) NOT NULL,
  `idInfoeskul` int(5) NOT NULL,
  `keterangan` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nilai_eskul`
--

INSERT INTO `nilai_eskul` (`IdNilaieskul`, `noIdPesertaDidik`, `idInfoeskul`, `keterangan`) VALUES
(1, 1, 1, 'A'),
(2, 3, 2, 'baik1'),
(3, 2, 3, 'baik');

-- --------------------------------------------------------

--
-- Table structure for table `perijinan`
--

CREATE TABLE `perijinan` (
  `idPerijinan` int(11) NOT NULL,
  `noIdPesertaDidik` int(5) NOT NULL,
  `noIdGuru` int(5) NOT NULL,
  `tanggal_perijinan` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perijinan`
--

INSERT INTO `perijinan` (`idPerijinan`, `noIdPesertaDidik`, `noIdGuru`, `tanggal_perijinan`) VALUES
(1, 1, 4, '2023-09-21'),
(2, 1, 9, '2023-09-13'),
(3, 2, 10, '2023-09-02'),
(4, 3, 2, '2023-09-19');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_adminsystem`
--

CREATE TABLE `tbl_adminsystem` (
  `noIdAdmin` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `namaAdminSystem` varchar(100) NOT NULL,
  `jenisKelamin` varchar(50) NOT NULL,
  `alamat` tinytext NOT NULL,
  `noHP` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_adminsystem`
--

INSERT INTO `tbl_adminsystem` (`noIdAdmin`, `noIdPengguna`, `namaAdminSystem`, `jenisKelamin`, `alamat`, `noHP`) VALUES
(1, 1, 'rangerMerah', 'Laki-Laki', 'Jl. Kalidam No. 1', '082115421487');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_guru`
--

CREATE TABLE `tbl_guru` (
  `noIdGuru` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `noIdJabatan` int(5) NOT NULL,
  `namaGuru` varchar(100) NOT NULL,
  `nomorInduk` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `pendidikanTerakhir` varchar(100) NOT NULL,
  `walikelas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_guru`
--

INSERT INTO `tbl_guru` (`noIdGuru`, `noIdPengguna`, `noIdJabatan`, `namaGuru`, `nomorInduk`, `tempatLahir`, `tanggalLahir`, `agama`, `noHP`, `alamat`, `pendidikanTerakhir`, `walikelas`) VALUES
(1, 1, 1, 'Pa Alfian Rahman', '22425', 'bandung', '1998-09-18', 'islam', '0898193', 'jalan cimahi', 's1 kom', '-'),
(2, 1, 1, ' Pa Ryan Permana', '12122', 'bandung', '1994-09-10', 'islam', '0809881', 'bandung hilir', 's1 agama', 'XII MEKA'),
(3, 1, 1, ' Pa Jimmy ', '13131', 'bandung', '1991-09-12', 'islam', '089811', 'bandung selatan', 's1 olahraga', '-'),
(4, 1, 1, 'Pa Raka', '1234321', 'bandung', '1998-09-19', 'islam', '1234567', 'cimahi', 's1 tkr', '-'),
(5, 1, 1, 'Pa tri', '12342', 'bandung', '1995-08-11', 'islam', '08981', 'cimahi', 'tni polri', '-'),
(6, 1, 1, 'Pa Ade', '12345', 'bandung', '2014-08-01', 'islam', '098765', 'cimahilir', 'smk', 'X meka'),
(7, 1, 1, 'pak rahmat', '09875', 'bandung', '1967-08-07', 'islam', '09876', 'padalarang', 'smk', '-'),
(8, 1, 1, 'Pak Lutfi', '321', 'bandung', '1996-09-03', 'islam', '098765', 'bandung hilir', 's1 ', '-'),
(9, 1, 1, 'Bu iqlima', '123', '1313', '2023-09-12', 'islam', '00891313', 'ewqwqd', 's1', '-'),
(10, 1, 1, 'Pak Andi', '1323', 'bandung', '1998-09-18', 'islam', '089812', 'bandung', 's1', '-');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jabatanstruktural`
--

CREATE TABLE `tbl_jabatanstruktural` (
  `noIdJabatan` int(5) NOT NULL,
  `namaJabatan` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_jabatanstruktural`
--

INSERT INTO `tbl_jabatanstruktural` (`noIdJabatan`, `namaJabatan`, `deskripsi`) VALUES
(1, 'Creator', 'Menulis, meninjau, mengedit, dan membuat konten untuk platform yang digunakan perusahaan untuk marketing');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jenispengguna`
--

CREATE TABLE `tbl_jenispengguna` (
  `noIdJenisPengguna` int(6) NOT NULL,
  `jenisPengguna` varchar(55) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_jenispengguna`
--

INSERT INTO `tbl_jenispengguna` (`noIdJenisPengguna`, `jenisPengguna`, `deskripsi`) VALUES
(1, 'Kreator', 'Kreator adalah salah satu kata serapan dari bahasa inggris creator yang berarti seorang pencipta atau pembuat gagasan'),
(2, 'Admin', 'Admin adalah pekerjaan yang tugasnya mengorganisir atau memastikan setiap pekerjaan yang bersifat administratif atau ketatausahaan dalam sebuah perusahaan berjalan lancar'),
(3, 'Kepala Sekolah', 'Kepala sekolah adalah guru yang diberikan tugas tambahan untuk memimpin suatu sekolah yang diselenggarakan proses belajar-mengajar atau tempat terjadi interaksi antara guru yang memberi pelajaran dan murid yang menerima pelajaran'),
(4, 'Tenaga Kependidikan', 'Tenaga Kependidikan adalah anggota masyarakat yang mengabdikan diri dan diangkat untuk menunjang Penyelenggaraan Pendidikan'),
(5, 'Guru', 'Guru adalah seorang pengajar suatu ilmu.'),
(6, 'Peserta Didik', 'Peserta didik adalah anggota masyarakat yang berusaha mengembangkan potensi diri melalui proses pembelajaran pada jalur pendidikan baik pendidikan informal, pendidikan formal maupun pendidikan nonformal, pada jenjang pendidikan dan jenis pendidikan tertentu.'),
(7, 'Orang Tua/Wali', 'Orang Tua/Wali adalah orang dewasa yang bersama-sama dengan guru mendidik peserta didik'),
(8, 'Yayasan dan Komite', 'Yayasan dan Komite adalah sejumlah orang yang ditunjuk untuk melaksanakan tugas tertentu ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kepalasekolah`
--

CREATE TABLE `tbl_kepalasekolah` (
  `noIdKepsek` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `namaKepsek` varchar(100) NOT NULL,
  `nomorInduk` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `pendidikanTerakhir` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kependidikan`
--

CREATE TABLE `tbl_kependidikan` (
  `noIdKependidikan` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `noIdJabatan` int(5) NOT NULL,
  `namaKependidikan` varchar(100) NOT NULL,
  `nomorInduk` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `pendidikanTerakhir` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orgtuawali`
--

CREATE TABLE `tbl_orgtuawali` (
  `noIdOrgTuaWali` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `noIdPesertaDidik` int(5) NOT NULL,
  `namaOrgTuaWali` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `pendidikanTerakhir` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pengguna`
--

CREATE TABLE `tbl_pengguna` (
  `noIdPengguna` int(5) NOT NULL,
  `noIdJenisPengguna` int(6) NOT NULL,
  `noIdJabatan` int(5) NOT NULL,
  `namaPengguna` varchar(100) NOT NULL,
  `userName` varchar(55) NOT NULL,
  `passWord` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_pengguna`
--

INSERT INTO `tbl_pengguna` (`noIdPengguna`, `noIdJenisPengguna`, `noIdJabatan`, `namaPengguna`, `userName`, `passWord`) VALUES
(1, 1, 1, 'ariek', 'rangermerah', 'happyfeetbay2298+');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pesertadidik`
--

CREATE TABLE `tbl_pesertadidik` (
  `noIdPesertaDidik` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `namaPesertaDidik` varchar(100) NOT NULL,
  `nomorInduk` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `kelas` varchar(225) NOT NULL,
  `jurusan` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_pesertadidik`
--

INSERT INTO `tbl_pesertadidik` (`noIdPesertaDidik`, `noIdPengguna`, `namaPesertaDidik`, `nomorInduk`, `tempatLahir`, `tanggalLahir`, `agama`, `noHP`, `alamat`, `kelas`, `jurusan`) VALUES
(1, 1, 'septi', '1234432', 'bandung', '2005-09-30', 'islam', '08979', 'cibodas utama', 'XII B', 'meka'),
(2, 1, 'ariek razan', '543245', 'bandung', '2007-09-22', 'islam', '0892741', 'margaasih cigugur', 'XII B', 'Rpl'),
(3, 1, 'benii megasial', '1234', 'bandung', '2014-08-09', 'islam', '0890281', 'bandung hilir', 'x', 'rpl');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pesertaekskul`
--

CREATE TABLE `tbl_pesertaekskul` (
  `idPesertaEskul` int(11) NOT NULL,
  `idInfoeskul` int(11) NOT NULL,
  `noIdGuru` int(5) NOT NULL,
  `noIdPesertaDidik` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_pesertaekskul`
--

INSERT INTO `tbl_pesertaekskul` (`idPesertaEskul`, `idInfoeskul`, `noIdGuru`, `noIdPesertaDidik`) VALUES
(1, 3, 1, 3),
(2, 3, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_yayasankomite`
--

CREATE TABLE `tbl_yayasankomite` (
  `noIdYayasanKomite` int(5) NOT NULL,
  `noIdPengguna` int(5) NOT NULL,
  `namaYayasanKomite` varchar(100) NOT NULL,
  `nomorInduk` varchar(100) NOT NULL,
  `tempatLahir` varchar(100) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `agama` varchar(100) NOT NULL,
  `noHP` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `pendidikanTerakhir` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info_ekskul`
--
ALTER TABLE `info_ekskul`
  ADD PRIMARY KEY (`idInfoeskul`),
  ADD KEY `noIdGuru` (`noIdGuru`);

--
-- Indexes for table `nilai_eskul`
--
ALTER TABLE `nilai_eskul`
  ADD PRIMARY KEY (`IdNilaieskul`),
  ADD KEY `noIdPesertaDidik` (`noIdPesertaDidik`),
  ADD KEY `idInfoeskul` (`idInfoeskul`);

--
-- Indexes for table `perijinan`
--
ALTER TABLE `perijinan`
  ADD PRIMARY KEY (`idPerijinan`),
  ADD KEY `noIdPesertaDidik` (`noIdPesertaDidik`,`noIdGuru`),
  ADD KEY `noIdGuru` (`noIdGuru`);

--
-- Indexes for table `tbl_adminsystem`
--
ALTER TABLE `tbl_adminsystem`
  ADD PRIMARY KEY (`noIdAdmin`),
  ADD KEY `tbl_adminsystem_ibfk_1` (`noIdPengguna`);

--
-- Indexes for table `tbl_guru`
--
ALTER TABLE `tbl_guru`
  ADD PRIMARY KEY (`noIdGuru`),
  ADD KEY `tbl_guru_ibfk_1` (`noIdPengguna`),
  ADD KEY `tbl_guru_ibfk_2` (`noIdJabatan`);

--
-- Indexes for table `tbl_jabatanstruktural`
--
ALTER TABLE `tbl_jabatanstruktural`
  ADD PRIMARY KEY (`noIdJabatan`);

--
-- Indexes for table `tbl_jenispengguna`
--
ALTER TABLE `tbl_jenispengguna`
  ADD PRIMARY KEY (`noIdJenisPengguna`);

--
-- Indexes for table `tbl_kepalasekolah`
--
ALTER TABLE `tbl_kepalasekolah`
  ADD PRIMARY KEY (`noIdKepsek`),
  ADD KEY `tbl_kepalasekolah_ibfk_1` (`noIdPengguna`);

--
-- Indexes for table `tbl_kependidikan`
--
ALTER TABLE `tbl_kependidikan`
  ADD PRIMARY KEY (`noIdKependidikan`),
  ADD KEY `tbl_kependidikan_ibfk_1` (`noIdPengguna`),
  ADD KEY `tbl_kependidikan_ibfk_2` (`noIdJabatan`);

--
-- Indexes for table `tbl_orgtuawali`
--
ALTER TABLE `tbl_orgtuawali`
  ADD PRIMARY KEY (`noIdOrgTuaWali`),
  ADD KEY `tbl_orgtuawali_ibfk_1` (`noIdPengguna`),
  ADD KEY `tbl_orgtuawali_ibfk_2` (`noIdPesertaDidik`);

--
-- Indexes for table `tbl_pengguna`
--
ALTER TABLE `tbl_pengguna`
  ADD PRIMARY KEY (`noIdPengguna`),
  ADD KEY `tbl_pengguna_ibfk_1` (`noIdJenisPengguna`),
  ADD KEY `tbl_pengguna_ibfk_2` (`noIdJabatan`);

--
-- Indexes for table `tbl_pesertadidik`
--
ALTER TABLE `tbl_pesertadidik`
  ADD PRIMARY KEY (`noIdPesertaDidik`),
  ADD KEY `tbl_pesertadidik_ibfk_3` (`noIdPengguna`);

--
-- Indexes for table `tbl_pesertaekskul`
--
ALTER TABLE `tbl_pesertaekskul`
  ADD PRIMARY KEY (`idPesertaEskul`),
  ADD KEY `idInfoeskul` (`idInfoeskul`,`noIdGuru`,`noIdPesertaDidik`),
  ADD KEY `noIdGuru` (`noIdGuru`),
  ADD KEY `noIdPesertaDidik` (`noIdPesertaDidik`);

--
-- Indexes for table `tbl_yayasankomite`
--
ALTER TABLE `tbl_yayasankomite`
  ADD PRIMARY KEY (`noIdYayasanKomite`),
  ADD KEY `tbl_yayasankomite_ibfk_1` (`noIdPengguna`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info_ekskul`
--
ALTER TABLE `info_ekskul`
  MODIFY `idInfoeskul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nilai_eskul`
--
ALTER TABLE `nilai_eskul`
  MODIFY `IdNilaieskul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `perijinan`
--
ALTER TABLE `perijinan`
  MODIFY `idPerijinan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_guru`
--
ALTER TABLE `tbl_guru`
  MODIFY `noIdGuru` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_pesertaekskul`
--
ALTER TABLE `tbl_pesertaekskul`
  MODIFY `idPesertaEskul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `info_ekskul`
--
ALTER TABLE `info_ekskul`
  ADD CONSTRAINT `info_ekskul_ibfk_1` FOREIGN KEY (`noIdGuru`) REFERENCES `tbl_guru` (`noIdGuru`);

--
-- Constraints for table `nilai_eskul`
--
ALTER TABLE `nilai_eskul`
  ADD CONSTRAINT `nilai_eskul_ibfk_1` FOREIGN KEY (`noIdPesertaDidik`) REFERENCES `tbl_pesertadidik` (`noIdPesertaDidik`),
  ADD CONSTRAINT `nilai_eskul_ibfk_2` FOREIGN KEY (`idInfoeskul`) REFERENCES `info_ekskul` (`idInfoeskul`);

--
-- Constraints for table `perijinan`
--
ALTER TABLE `perijinan`
  ADD CONSTRAINT `perijinan_ibfk_1` FOREIGN KEY (`noIdPesertaDidik`) REFERENCES `tbl_pesertadidik` (`noIdPesertaDidik`),
  ADD CONSTRAINT `perijinan_ibfk_2` FOREIGN KEY (`noIdGuru`) REFERENCES `tbl_guru` (`noIdGuru`);

--
-- Constraints for table `tbl_adminsystem`
--
ALTER TABLE `tbl_adminsystem`
  ADD CONSTRAINT `tbl_adminsystem_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_guru`
--
ALTER TABLE `tbl_guru`
  ADD CONSTRAINT `tbl_guru_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_guru_ibfk_2` FOREIGN KEY (`noIdJabatan`) REFERENCES `tbl_jabatanstruktural` (`noIdJabatan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_kepalasekolah`
--
ALTER TABLE `tbl_kepalasekolah`
  ADD CONSTRAINT `tbl_kepalasekolah_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_kependidikan`
--
ALTER TABLE `tbl_kependidikan`
  ADD CONSTRAINT `tbl_kependidikan_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_kependidikan_ibfk_2` FOREIGN KEY (`noIdJabatan`) REFERENCES `tbl_jabatanstruktural` (`noIdJabatan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_orgtuawali`
--
ALTER TABLE `tbl_orgtuawali`
  ADD CONSTRAINT `tbl_orgtuawali_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_orgtuawali_ibfk_2` FOREIGN KEY (`noIdPesertaDidik`) REFERENCES `tbl_pesertadidik` (`noIdPesertaDidik`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_pengguna`
--
ALTER TABLE `tbl_pengguna`
  ADD CONSTRAINT `tbl_pengguna_ibfk_1` FOREIGN KEY (`noIdJenisPengguna`) REFERENCES `tbl_jenispengguna` (`noIdJenisPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_pengguna_ibfk_2` FOREIGN KEY (`noIdJabatan`) REFERENCES `tbl_jabatanstruktural` (`noIdJabatan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_pesertadidik`
--
ALTER TABLE `tbl_pesertadidik`
  ADD CONSTRAINT `tbl_pesertadidik_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_pesertadidik_ibfk_2` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_pesertadidik_ibfk_3` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_pesertaekskul`
--
ALTER TABLE `tbl_pesertaekskul`
  ADD CONSTRAINT `tbl_pesertaekskul_ibfk_1` FOREIGN KEY (`idInfoeskul`) REFERENCES `info_ekskul` (`idInfoeskul`),
  ADD CONSTRAINT `tbl_pesertaekskul_ibfk_2` FOREIGN KEY (`noIdGuru`) REFERENCES `tbl_guru` (`noIdGuru`),
  ADD CONSTRAINT `tbl_pesertaekskul_ibfk_3` FOREIGN KEY (`noIdPesertaDidik`) REFERENCES `tbl_pesertadidik` (`noIdPesertaDidik`);

--
-- Constraints for table `tbl_yayasankomite`
--
ALTER TABLE `tbl_yayasankomite`
  ADD CONSTRAINT `tbl_yayasankomite_ibfk_1` FOREIGN KEY (`noIdPengguna`) REFERENCES `tbl_pengguna` (`noIdPengguna`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
