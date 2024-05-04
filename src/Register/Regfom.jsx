export default function Regfom() {
  return <div style={{
    width: '20%',
    height: '80%',
    position: 'relative',
    background: '#fff',
    border: '1px solid #aaaaaa',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '.5rem',
    fontFamily: 'D-DIN Condensed'
  }}>

    <form>

    </form>
  </div>
}



// import styled from "styled-components"

// export default function RegForm() {


//   // var currentTab = 0; // Current tab is set to be the first tab (0)
//   // showTab(currentTab); // Display the current tab
  
//   // function showTab(n) {
//   //   // This function will display the specified tab of the form ...
//   //   var x = document.getElementsByClassName("tab");
//   //   x[n].style.display = "block";
//   //   // ... and fix the Previous/Next buttons:
//   //   if (n == 0) {
//   //     document.getElementById("prevBtn").style.display = "none";
//   //   } else {
//   //     document.getElementById("prevBtn").style.display = "inline";
//   //   }
//   //   if (n == (x.length - 1)) {
//   //     document.getElementById("nextBtn").innerHTML = "Submit";
//   //   } else {
//   //     document.getElementById("nextBtn").innerHTML = "Next";
//   //   }
//   //   // ... and run a function that displays the correct step indicator:
//   //   fixStepIndicator(n)
//   // }
  
//   // function nextPrev(n) {
//   //   // This function will figure out which tab to display
//   //   var x = document.getElementsByClassName("tab");
//   //   // Exit the function if any field in the current tab is invalid:
//   //   if (n == 1 && !validateForm()) return false;
//   //   // Hide the current tab:
//   //   x[currentTab].style.display = "none";
//   //   // Increase or decrease the current tab by 1:
//   //   currentTab = currentTab + n;
//   //   // if you have reached the end of the form... :
//   //   if (currentTab >= x.length) {
//   //     //...the form gets submitted:
//   //     document.getElementById("regForm").submit();
//   //     return false;
//   //   }
//   //   // Otherwise, display the correct tab:
//   //   showTab(currentTab);
//   // }
  
//   // function validateForm() {
//   //   // This function deals with validation of the form fields
//   //   var x, y, i, valid = true;
//   //   x = document.getElementsByClassName("tab");
//   //   y = x[currentTab].getElementsByTagName("input");
//   //   // A loop that checks every input field in the current tab:
//   //   for (i = 0; i < y.length; i++) {
//   //     // If a field is empty...
//   //     if (y[i].value == "") {
//   //       // add an "invalid" class to the field:
//   //       y[i].className += " invalid";
//   //       // and set the current valid status to false:
//   //       valid = false;
//   //     }
//   //   }
//   //   // If the valid status is true, mark the step as finished and valid:
//   //   if (valid) {
//   //     document.getElementsByClassName("step")[currentTab].className += " finish";
//   //   }
//   //   return valid; // return the valid status
//   // }
  
//   // function fixStepIndicator(n) {
//   //   // This function removes the "active" class of all steps...
//   //   var i, x = document.getElementsByClassName("step");
//   //   for (i = 0; i < x.length; i++) {
//   //     x[i].className = x[i].className.replace(" active", "");
//   //   }
//   //   //... and adds the "active" class to the current step:
//   //   x[n].className += " active";
//   // }
// //   var password = document.getElementById("password")
// //   , confirm_password = document.getElementById("confirm_password");

// //   function validatePassword(){
// //   if(password.value != confirm_password.value) {
// //     confirm_password.setCustomValidity("Passwords Don't Match");
// //   } else {
// //     confirm_password.setCustomValidity('');
// //   }
// //   }

// // password.onchange = validatePassword;
// // confirm_password.onkeyup = validatePassword;
//   return (
//     <Rf>
//          <form id="regForm" action="">
//             <h4>Register</h4>
//             <p>Enter your details to register</p>
// {/* <!-- One "tab" for each step in the form: --> */}
//               <div className="tab">Company Name:
//               <p><input className="plc" placeholder="Enter your company name" oninput="this.className = ''"/></p>
//               <p><input className="plc" placeholder="Company email" type="EmailAddress" oninput="this.className = ''"/></p>
//               </div>

//               <div className="tab">Password
//               <p><input className="plc" type='password' placeholder="Password" oninput="this.className = ''"
//               name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
//               title="Must contain at least one number and 
//               one uppercase and lowercase letter, special character and at least 8 or more characters" required/></p>
//               <p><input className="plc" type="password" placeholder="Confirm Password" id="confirm_password" required/></p>
//               </div>

//               <div style={{overflow: 'auto'}}>
//               <div style={{float:'right'}}>
//               <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
//               <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
//               </div>
//               </div>

//         </form>
//     </Rf>
//   )
// }

// const Rf = styled.div`
// width: 100%;
// height: 90%;
// display: flex;
// align-items: center;
// justify-content: center;

// /* Style the form */
// #regForm {
//   width: 25%;
//   height: 85%;
//   background-color: #ffffff;
//   margin: 100px auto;
//   padding: 40px 0px 0px 0px;
//   border-radius: 16px 0px 0px 0px;
//   box-shadow: 16px 16px 64px 0px #1A1A1A29;
//   // width: 70%;
//   // min-width: 300px;
// }

// /* Style the input fields */
// input {
//   padding: 10px;
//   font-size: 16px;
//   font-family: Raleway;
//   border: 1px solid #aaaaaa;
//   width: 90%;
//   border-radius: 6px;
// }

// /* Mark input boxes that gets an error on validation: */
// input.invalid {
//   background-color: #ffdddd;
// }

// /* Hide all steps by default: */
// .tab {
//   // display: none;
//   width: 80%;
//   background: red;
//   gap: 1rem;


// // /* Make circles that indicate the steps of the form: */
// // .step {
// //   height: 15px;
// //   width: 15px;
// //   margin: 0 2px;
// //   background-color: #bbbbbb;
// //   border: none;
// //   border-radius: 50%;
// //   display: inline-block;
// //   opacity: 0.5;
// // }

// // /* Mark the active step: */
// // .step.active {
// //   opacity: 1;
// // }

// // /* Mark the steps that are finished and valid: */
// // .step.finish {
// //   background: #04AA6D;
// // }

// `
