<?php
error_reporting(0);
   $conn=new mysqli("localhost","root","","admission23");

/*$tb="CREATE TABLE student_details(
   sname varchar(45) NOT NULL,
   centac_josaa varchar(50) primary key NOT NULL,
   programme varchar(50) NOT NULL,
   department varchar(50) NOT NULL,
   specialization varchar(50) NOT NULL,
   birthday date NOT NULL,
   religion varchar(50) NOT NULL,
   nationality varchar(50) NOT NULL,
   community varchar(50) NOT NULL,
   mother_tongue varchar(50) NOT NULL,
   gender varchar(50) NOT NULL,
   date_of_admission date NOT NULL,
   mobile_number int(10) NOT NULL,
   aadhar_number int(16) unique NOT NULL,
   email varchar(50) NOT NULL,
   join_type varchar(50) NOT NULL,
   father_name varchar(50) NOT NULL,
   mother_name varchar(50) NOT NULL,
   father_occupation varchar(50) NOT NULL,
   father_mobile_no int(11) NOT NULL,
   income int(11) NOT NULL,
   sibling int(11) NOT NULL,
   category varchar(50) NOT NULL,
   blood varchar(50) NOT NULL,
   states varchar(50) NOT NULL,
   assembly varchar(50) NOT NULL,
   admitted varchar(50) NOT NULL,
   original_category varchar(50) NOT NULL,
   reg_num_10 varchar(50) NOT NULL,
   school_10 varchar(50) NOT NULL,
   board_10 varchar(50) NOT NULL,
   percentage_10 int(50) NOT NULL,
   year_of_passing_10 varchar(10) NOT NULL,
   reg_num_11 varchar(50) NOT NULL,
   school_11 varchar(50) NOT NULL,
   board_11 varchar(50) NOT NULL,
   percentage_11 int(11) NOT NULL,
   year_of_passing_11 varchar(10) NOT NULL,
   reg_num_12 varchar(50) NOT NULL,
   school_12 varchar(50) NOT NULL,
   board_12 varchar(50) NOT NULL,
   percentage_12 int(11) NOT NULL,
   year_of_passing_12 varchar(10) NOT NULL,
   permanent_address varchar(120) NOT NULL,
   communication_address varchar(120) NOT NULL,
   trans_action_num varchar(200) Unique NOT NULL,
   amount_paid int(11) NOT NULL
 )";
$conn->query($tb);*/

$s_name = $_POST['sname'];
$centac_josaa=$_POST['centac_josaa'];
$programme = $_POST['programme'];
$department = $_POST['department'];
$specialization = $_POST['specialization'];
$birthday = $_POST['birthday'];
$religion = $_POST['religion'];
$nationality = $_POST['nationality'];
$community = $_POST['community'];
$mother_tongue = $_POST['mother_tongue'];
$gender = $_POST['gender'];
$date_of_admission = $_POST['date_of_admission'];
$mobile_number = $_POST['mobile_number'];
$aadhar_number = $_POST['aadhar_number'];
$email = $_POST['email'];
$join_type = $_POST['join_type'];
$father_name = $_POST['father_name'];
$mother_name = $_POST['mother_name'];
$father_occupation = $_POST['father_occupation'];
$father_mobile_no = $_POST['father_mobile_no'];
$income = $_POST['income'];
$sibling = $_POST['sibling'];
$category = $_POST['category'];
$blood = $_POST['blood'];
$states = $_POST['states'];
$assembly = $_POST['assembly'];
$admitted = $_POST['admitted'];
$original_category = $_POST['original_category'];
$reg_num_10=$_POST['reg_num_10'];
$school_10=$_POST['school_10'];
$board_10=$_POST['board_10'];
$percentage_10=$_POST['percentage_10'];
$yop_10=$_POST['yop_10'];
$reg_num_11 = $_POST['reg_num_11'];
$school_11 = $_POST['school_11'];
$board_11 = $_POST['board_11'];
$percentage_11 = $_POST['percentage_11'];
$yop_11=$_POST['yop_11'];
$reg_num_12 = $_POST['reg_num_12'];
$school_12 = $_POST['school_12'];
$board_12 = $_POST['board_12'];
$percentage_12 = $_POST['percentage_12'];
$permanent_address = $_POST['permanent_address'];
$communication_address = $_POST['communication_address'];
$trans_action_num=$_POST['trans_action_num'];
$amount_paid=$_POST['amount_paid'];
$yop_12=$_POST['yop_12'];

//storing profile image in a folder with their centac/joSaa Number
mkdir("uploads/$centac_josaa");
$target_dir = "uploads/$centac_josaa/";
$ext=pathinfo($_FILES["profile"]["name"],PATHINFO_EXTENSION);
$target_file = $target_dir."profile".".".$ext;
move_uploaded_file($_FILES["profile"]["tmp_name"], $target_file);

//storing receipt in the same 
$target_dir = "uploads/$centac_josaa/";
$ext=pathinfo($_FILES["receipt"]["name"],PATHINFO_EXTENSION);
$target_file = $target_dir."receipt".".".$ext;
move_uploaded_file($_FILES["receipt"]["tmp_name"], $target_file);




$sql = "INSERT INTO student_details (sname,centac_josaa,programme,department,specialization,birthday,religion,nationality,community,mother_tongue,gender,date_of_admission,mobile_number,aadhar_number, email, join_type,father_name,mother_name,father_occupation,father_mobile_no,income,sibling,category,blood,states,assembly,admitted,original_category,reg_num_10,school_10,board_10, percentage_10, year_of_passing_10, reg_num_11, school_11, board_11, percentage_11,year_of_passing_11,reg_num_12, school_12, board_12, percentage_12,year_of_passing_12, permanent_address, communication_address, trans_action_num, amount_paid)
VALUES ('$s_name','$centac_josaa','$programme','$department', '$specialization','$birthday','$religion', '$nationality', '$community', '$mother_tongue', '$gender', '$date_of_admission', '$mobile_number', '$aadhar_number', '$email','$join_type','$father_name','$mother_name', '$father_occupation', '$father_mobile_no', '$income', '$sibling', '$category', '$blood', '$states', '$assembly', '$admitted', '$original_category', '$reg_num_10', '$school_10', '$board_10', '$percentage_10', '$yop_10', '$reg_num_11', '$school_11', '$board_11', '$percentage_11', '$yop_11', '$reg_num_12', '$school_12', '$board_12', '$percentage_12','$yop_12', '$permanent_address', '$communication_address', '$trans_action_num', '$amount_paid')";

if (mysqli_query($conn, $sql)) {
    echo "Insertion successful";
} else {
    echo "Something went wrong";
}
mysqli_close($conn);
?>
