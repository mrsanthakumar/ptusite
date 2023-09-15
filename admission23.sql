-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2023 at 02:53 PM
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
-- Database: `admission23`
--

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `sname` varchar(45) NOT NULL,
  `centac_josaa` varchar(50) NOT NULL,
  `programme` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `religion` varchar(50) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `community` varchar(50) NOT NULL,
  `mother_tongue` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `date_of_admission` date NOT NULL,
  `mobile_number` int(10) NOT NULL,
  `aadhar_number` int(16) NOT NULL,
  `email` varchar(50) NOT NULL,
  `join_type` varchar(50) NOT NULL,
  `father_name` varchar(50) NOT NULL,
  `mother_name` varchar(50) NOT NULL,
  `father_occupation` varchar(50) NOT NULL,
  `father_mobile_no` int(11) NOT NULL,
  `income` int(11) NOT NULL,
  `sibling` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `blood` varchar(50) NOT NULL,
  `states` varchar(50) NOT NULL,
  `assembly` varchar(50) NOT NULL,
  `admitted` varchar(50) NOT NULL,
  `original_category` varchar(50) NOT NULL,
  `reg_num_10` varchar(50) NOT NULL,
  `school_10` varchar(50) NOT NULL,
  `board_10` varchar(50) NOT NULL,
  `percentage_10` int(50) NOT NULL,
  `year_of_passing_10` varchar(10) NOT NULL,
  `reg_num_11` varchar(50) NOT NULL,
  `school_11` varchar(50) NOT NULL,
  `board_11` varchar(50) NOT NULL,
  `percentage_11` int(11) NOT NULL,
  `year_of_passing_11` varchar(10) NOT NULL,
  `reg_num_12` varchar(50) NOT NULL,
  `school_12` varchar(50) NOT NULL,
  `board_12` varchar(50) NOT NULL,
  `percentage_12` int(11) NOT NULL,
  `year_of_passing_12` varchar(10) NOT NULL,
  `permanent_address` varchar(120) NOT NULL,
  `communication_address` varchar(120) NOT NULL,
  `trans_action_num` varchar(200) NOT NULL,
  `amount_paid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`sname`, `centac_josaa`, `programme`, `department`, `specialization`, `birthday`, `religion`, `nationality`, `community`, `mother_tongue`, `gender`, `date_of_admission`, `mobile_number`, `aadhar_number`, `email`, `join_type`, `father_name`, `mother_name`, `father_occupation`, `father_mobile_no`, `income`, `sibling`, `category`, `blood`, `states`, `assembly`, `admitted`, `original_category`, `reg_num_10`, `school_10`, `board_10`, `percentage_10`, `year_of_passing_10`, `reg_num_11`, `school_11`, `board_11`, `percentage_11`, `year_of_passing_11`, `reg_num_12`, `school_12`, `board_12`, `percentage_12`, `year_of_passing_12`, `permanent_address`, `communication_address`, `trans_action_num`, `amount_paid`) VALUES
('uyiyi', 'iiiy', 'B.Tech', 'INFORMATION TECHNOLOGY', 'PRODUCT DESIGN AND MANUFACTURING', '0011-11-11', 'Hindu', 'Indian', 'SC', ' Punjabi', 'Male', '0001-11-11', 1111111111, 2147483647, 'nan@gmail.com', 'JoSAA', 'nandi', 'knki', 'joo', 1245367890, 0, 5, 'SP', 'A-', 'Other State', 'qiihiih', 'iuoo', 'oououo', 'ii', 'yiy', 'iiy', 0, 'iy', 'iyi', 'yi', 'ii', 0, 'ii', 'yi', 'yiy', 'iiiy', 0, 'yiyii', 'hwiii', 'ihihii', 'ihiiyi', 122);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`centac_josaa`),
  ADD UNIQUE KEY `aadhar_number` (`aadhar_number`),
  ADD UNIQUE KEY `trans_action_num` (`trans_action_num`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
