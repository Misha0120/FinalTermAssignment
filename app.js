      function signupFunc() {
        let usersArray = JSON.parse(localStorage.getItem("users")) || [];

        const userEamil = document.getElementById("email").value;
        const userPass = document.getElementById("password").value;
        const userName = document.getElementById("userName").value;

        for (let user of usersArray) {
            if (user.userEamil === userEamil) {
                alert("Email already in use");
                return;
            }
        }

        const userObj = {
            userName: userName,
            userEamil: userEamil,
            userPass: userPass
        };

        usersArray.push(userObj);
        localStorage.setItem("users", JSON.stringify(usersArray));

        document.getElementById("signupForm").reset();
        alert("Signed up successfully");
    }

    function loginFunc() {
        let usersArray = JSON.parse(localStorage.getItem("users")) || [];

        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;

        let userFound = usersArray.find(user => user.userEamil === loginEmail && user.userPass === loginPassword);

        if (userFound) {
            alert(`Welcome back, ${userFound.userName}!`);
            window.location.href = "index.html";
        } else {
            alert("Incorrect email or password");
        }

        document.getElementById("loginForm").reset();
    }
