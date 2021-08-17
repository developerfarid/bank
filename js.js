document.getElementById("login").style.display = "none";
document.getElementById("bank").style.display = "none";
document
  .getElementById("start-btn")
  .addEventListener("click", function () {
    let signName = document.getElementById("name-user").value;
    let signEmail = document.getElementById("email-user").value;
    let signPass = document.getElementById("pass-user").value;
    console.log();
    if (
       signName.length != 0 &&
      signEmail.length != 0 &&
      signPass.length != 0
    ) {
      document.getElementById("login").style.display = "block";
      document.getElementById("sign-up").style.display = "none";

      document
        .getElementById("submit")
        .addEventListener("click", function (e) {
          e.preventDefault();
          let userEmail = document.getElementById("email").value;
          let userPass = document.getElementById("pass").value;

          if (userEmail === signEmail && userPass === signPass) {
            document.getElementById("login").style.display = "none";
            document.getElementById("bank").style.display = "block";
          } else {
            let body = document.getElementById("body");
            body.style.background = "red";
            alert("Please Provide a Valide Email and Password");
          }
          document.getElementById("email").value = "";
          document.getElementById("pass").value = "";
        });
    }else{
        alert ("Please Account First Sir!")
    }
  });

document
  .getElementById("submit-deposit")
  .addEventListener("click", function () {
    allFunction("deposit", "add");
  });
document
  .getElementById("submit-withdraw")
  .addEventListener("click", function () {
    allFunction("withdraw", "sub");
  });

function allFunction(type, cal) {
  console.log(type);
  let inputValuetId = parseFloat(
    document.getElementById(`${type}-input`).value
  );
   if(inputValuetId.length != 0 && inputValuetId >= 0 ) {
    const previouseAmountId = document.getElementById(`${type}`);
    let previouseAmount = parseFloat(previouseAmountId.innerText);
    let balanceId = document.getElementById("balence");
    let balence = parseFloat(balanceId.innerText);
    if (cal === "add") {
      add(type);
      const totalBalence = balence + inputValuetId;
      balanceId.innerText = totalBalence;
    } else {
      if (balence >= inputValuetId) {
        add(type);
        const totalBalence = balence - inputValuetId;
        balanceId.innerText = totalBalence;
      } else {
        document.getElementById(`${type}-input`).value = "";
        alert("Please enter a valide amount");
        return false;
      }
    }
    function add(type) {
      const totalAmount = previouseAmount + inputValuetId;
      previouseAmountId.innerText = totalAmount;
      document.getElementById(`${type}-input`).value = "";
    }
  }
  else {
      alert("Please enter a valide amount");
    document.getElementById(`${type}-input`).value = "";
    return false;
  }
} 