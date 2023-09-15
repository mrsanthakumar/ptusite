var res=[false,false,false];
var data=new FormData();
function f1(){
    var  profile,sname,
    centac_josaa,
    programme,
    department,
    specialization;
    profile=document.getElementById('profile');
    sname=document.getElementById('sname').value;
    centac_josaa=document.getElementById('centac_josaa').value;
    programme=document.getElementById('programme').value;
    department=document.getElementById('department').value;
    specialization=document.getElementById('specialization').value;
    if(profile=="" || centac_josaa =="" || programme =="" ){
        document.getElementById('f1').classList.add('was-validated');
        res[0]=false;
    }
    else{
        const file=profile.files[0];
        data.append("profile",file);
        data.append("sname", sname);
        data.append("centac_josaa", centac_josaa);
        data.append("programme", programme);
        data.append("department", department);
        data.append("specialization", specialization);
        res[0]=true;
        show(1);
    }
}
var form2_boolean=[false,false,false,false];
    function f2(){
    var birthday,
    religion,
    nationality,
    community,
    mother_tongue,
    gender,
    date_of_admission,
    mobile_number,
    aadhar_number,
    email,
    permanent_address,
    communication_address,
    join_type,
    father_name,
    mother_name,
    father_occupation,
    father_mobile_no,
    income,
    sibling,
    category,
    blood,
    states,
    assembly,
    admitted,
    original_category;
    birthday=document.getElementById('date').value;
    religion=document.getElementById('religion').value;
    nationality=document.getElementById('nationality').value;
    community=document.getElementById('community').value;
    mother_tongue=document.getElementById('mother_tongue').value;
    gender=document.getElementById('gender').value;
    date_of_admission=document.getElementById('date_of_admission').value;
    mobile_number=document.getElementById('mobile_number').value;
    aadhar_number=document.getElementById('aadhar_number').value;
    email=document.getElementById('email').value;
    permanent_address=document.getElementById('permanent_address').value;
    communication_address=document.getElementById('communication_address').value;
    join_type=document.getElementById('join_type').value;
    father_name=document.getElementById('father_name').value;
    mother_name=document.getElementById('mother_name').value;
    father_occupation=document.getElementById('father_occupation').value;
    father_mobile_no=document.getElementById('father_mobile_no').value;
    income=document.getElementById('income').value;
    sibling=document.getElementById('sibling').value;
    category=document.getElementById('category').value;
    blood=document.getElementById('blood').value;
    states=document.getElementById('states').value;
    assembly=document.getElementById('assembly').value;
    admitted=document.getElementById('admitted').value;
    original_category=document.getElementById('original_category').value;


    if(birthday == "" ||
    religion == "" ||
    nationality == "" ||
    community == "" ||
    mother_tongue == "" ||
    gender == "" ||
    date_of_admission == "" ||
    mobile_number == "" ||
    aadhar_number == "" ||
    email == "" ||
    permanent_address =="" ||
    communication_address =="" ||
    join_type == "" ||
    father_name == "" ||
    mother_name == "" ||
    father_occupation == "" ||
    father_mobile_no == "" ||
    income == "" ||
    sibling == "" ||
    category == "" ||
    blood == "" ||
    states == "" ||
    assembly == "" ||
    admitted == "" ||
    original_category == "" ){
        document.getElementById('f2').classList.add('was-validated');
        res[1]=false;
    }
    else{
        if(!form2_boolean[0]){
            document.getElementById("mobile_number").focus();

        }
        else if(!form2_boolean[1]){
            document.getElementById("aadhar_number").focus();
        }
        else if(!form2_boolean[2]){
            document.getElementById("email").focus();
        }
        else if(!form2_boolean[3]){
            document.getElementById("father_mobile_no").focus();
        }
        else{
        data.append("birthday", birthday);
        data.append("religion", religion);
        data.append("nationality", nationality);
        data.append("community", community);
        data.append("mother_tongue", mother_tongue);
        data.append("gender", gender);
        data.append("date_of_admission", date_of_admission);
        data.append("mobile_number", mobile_number);
        data.append("aadhar_number", aadhar_number);
        data.append("email", email);
        data.append("permanent_address",permanent_address);
        data.append("communication_address",communication_address);
        data.append("join_type", join_type);
        data.append("father_name", father_name);
        data.append("mother_name", mother_name);
        data.append("father_occupation", father_occupation);
        data.append("father_mobile_no", father_mobile_no);
        data.append("income", income);
        data.append("sibling", sibling);
        data.append("category", category);
        data.append("blood", blood);
        data.append("states", states);
        data.append("assembly", assembly);
        data.append("admitted", admitted);
        data.append("original_category", original_category);
        res[1]=true;
        show(2);
    }
    }
}
function f3(){
    var 
    reg_num_10,
    school_10,
    board_10,
    percentage_10,
    yop_10,
    reg_num_11,
    school_11,
    board_11,
    percentage_11,
    yop_11,
    reg_num_12,
    school_12,
    board_12,
    percentage_12,
    yop_12;

    reg_num_10=document.getElementById('reg_num10').value;
    school_10=document.getElementById('school_10').value;
    board_10=document.getElementById('board_10').value;
    percentage_10=document.getElementById('percentage_10').value;
    yop_10=document.getElementById('yop_10').value;
    reg_num_11=document.getElementById('reg_num_11').value;
    school_11=document.getElementById('school_11').value;
    board_11=document.getElementById('board_11').value;
    percentage_11=document.getElementById('percentage_11').value;
    yop_11=document.getElementById('yop_11').value;
    reg_num_12=document.getElementById('reg_num_12').value;
    school_12=document.getElementById('school_12').value;
    board_12=document.getElementById('board_12').value;
    percentage_12=document.getElementById('percentage_12').value;
    yop_12=document.getElementById('yop_12').value;


    if(reg_num_10 == "" ||
    school_10 == "" ||
    board_10 == "" ||
    percentage_10 == "" ||
    yop_10 =="" ||
    reg_num_11 == "" ||
    school_11 == "" ||
    board_11 == "" ||
    percentage_11 == "" ||
    yop_11 =="" ||
    reg_num_12 == "" ||
    school_12 == "" ||
    board_12 == "" ||
    yop_12 =="" ||
    percentage_12 == "" 
    ){
        document.getElementById('f3').classList.add('was-validated');
        res[2]=false;
    }
    else{
            data.append("reg_num_10", reg_num_10);
            data.append("school_10", school_10);
            data.append("board_10", board_10);
            data.append("percentage_10", percentage_10);
            data.append("yop_10",yop_10);
            data.append("reg_num_11", reg_num_11);
            data.append("school_11", school_11);
            data.append("board_11", board_11);
            data.append("percentage_11", percentage_11);
            data.append("yop_11",yop_11);
            data.append("reg_num_12", reg_num_12);
            data.append("school_12", school_12);
            data.append("board_12", board_12);
            data.append("percentage_12", percentage_12);
            data.append("yop_12",yop_12);
            res[2]=true;
            show(3);
    }
}

function f4(){

    var trans_action_num,
    amount_paid,
    receipt;

    trans_action_num=document.getElementById('trans_action_num').value;
    amount_paid=document.getElementById('amount_paid').value;
    receipt=document.getElementById('receipt');

    if(trans_action_num=="" || amount_paid=="" || receipt==""){
        document.getElementById('f4').classList.add('was-validated');
    }
    else{
        data.append("trans_action_num",trans_action_num);
        data.append("amount_paid",amount_paid);
        const file=receipt.files[0];
        data.append("receipt",file);
        
        if(!res[0]){
            show(0);
        }
        else if(!res[1]){
            show(1);
        }
        else if(!res[2]){
            show(2);
        }
        else{
            var  xmlhttp=new XMLHttpRequest();
            xmlhttp.open("POST", "insert_data.php", true);
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
            {        
            }};
            xmlhttp.onload=function(){
                alert(this.responseText);
                
            }
            xmlhttp.send(data);
        }
        
        for( let x of data.entries()){
            if(x[0]=="profile"){
                const imgPath = document.getElementById('profile').files[0];
                const reader = new FileReader();
                reader.addEventListener("load", function () {
            sessionStorage.setItem("profile", reader.result);}, false);
            if (imgPath) {
            reader.readAsDataURL(imgPath);
            }
        }
            sessionStorage.setItem(x[0],x[1]);
            location.href="chat.html";
        }
        
}  

}

function show(x){
    for(let i=0;i<4;i++){
        let name="form"+i;
        let val="bt"+i;
        if(i==x){
            document.getElementById(name).hidden=false;
            document.getElementById(val).className="btn btn-success me-2";
        }
        else{
            document.getElementById(name).hidden=true;
            document.getElementById(val).className="btn btn-outline-success me-2";            
        }
    }
}
function validateNumber(event, maxLength) {
   var keyCode = event.keyCode;

    // Allow special keys
    if (
        keyCode === 8 ||
        keyCode === 9 ||
        keyCode === 37 ||
        keyCode === 39 ||
        keyCode === 46
    ) {
        validateLength(event,maxLength);
        return true;
    }

    // Ensure that it is a number
    if (keyCode < 48 || keyCode > 57) {

        event.preventDefault();
        validateLength(event,maxLength);
        return false;
    }

    // Limit to maxLength characters
    var input = event.target.value;
    if (input.length >= maxLength) {
        event.preventDefault();
        validateLength(event,maxLength);
        return false;
    }
    
}

function validateLength(event, maxLength) {
    var input = event.target.value;
    var id=event.target.id;

    if (input.length < maxLength || input.length > maxLength) {
        if(maxLength==12){
                document.getElementById("v2").hidden=false;
                form2_boolean[1]=false;
        }
        else if(id=="mobile_number"){
            document.getElementById("v1").hidden=false;
            form2_boolean[0]=false;
        }
        else{
            document.getElementById("v4").hidden=false;
            form2_boolean[3]=false;
        }
        return false;
    } else {
            if(maxLength==12){
                    document.getElementById("v2").hidden=true;
                    form2_boolean[1]=true;
            }
            else if(id=="mobile_number"){
                document.getElementById("v1").hidden=true;
                form2_boolean[0]=true;
            }
            else{
                document.getElementById("v4").hidden=true;
                form2_boolean[3]=true;
            }
        return true;
    }
}
function validate() {
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
}
function validateEmail(event) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(event.target.value)) {
        document.getElementById("v3").hidden=true;
        form2_boolean[2]=true;
    } else {
        document.getElementById("v3").hidden=false;
        form2_boolean[2]=false;
    }
  
  }