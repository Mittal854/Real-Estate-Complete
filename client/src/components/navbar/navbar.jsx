import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false); // State for login popup
  const [openRegister, setOpenRegister] = useState(false); // State for register popup
  const [openSideMenu, setOpenSideMenu] = useState(false); // State for side menu
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  function togglePopupLogin() {
    setOpen(!open);
    setOpenRegister(false);
  }

  function togglePopupRegister() {
    if (open) {
      // Close the login popup if it's open
      setOpen(false);
    }
    // Open the register popup
    setOpenRegister(!openRegister);
    setOpen(false);
  }

  function register() {
    // Your register function implementation
    var name = document.getElementById("registerName").value;
    var phoneNumber = document.getElementById("registerPhoneNumber").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (name === "" || phoneNumber === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    var num = /^[6789]\d{9}$/;
    if (!phoneNumber.match(num)) {
      alert("Invalid Phone Number");
      return false;
    }

    var mailformat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!email.match(mailformat)) {
      alert("Invalid email");
      return false;
    }

    if (localStorage.getItem(email)) {
      alert("An account with this email already exists. Please log in.");
      togglePopupRegister();
      togglePopupLogin();
      return;
    }

    var userData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert("Registration successful");
    togglePopupRegister();
    togglePopupLogin(); // Close register popup after successful registration
  }

  function login() {
    // Your login function implementation
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      document.getElementById("logoutButton").style.display = "inline";
      document.getElementById("loginBtn").style.display = "none";
      togglePopupLogin();
    } else {
      alert("Invalid email or password");
    }
  }

  function logout() {
    // Your logout function implementation
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginBtn").style.display = "inline";
    localStorage.setItem("isLoggedIn", "false");
    alert("You are now logged out!");
    togglePopupLogin();
  }

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(isLoggedIn);
  // }, []);

  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>HomeHaven</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/list">Listings</Link>
      </div>
      <div className="right">
        {
          // isLoggedIn ? (
          //   <div className="user">
          //     <img
          //       src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //       alt=""
          //     />
          //     <span>John Doe</span>
          //     <Link to="/profile" className="profile">
          //       <div className="notification">3</div>
          //       <span>Profile</span>
          //     </Link>
          //     <button onClick={logout} className="logout">
          //       Logout
          //     </button>
          //   </div>
          // ) :
          <>
            <div className={open ? "popup active" : "popup"} id="popup-1">
              <div
                className="content"
                style={{ position: "absolute", zIndex: "101" }}>
                <div className="close-btn" onClick={togglePopupLogin}>
                  x
                </div>
                <p className="log1">
                  Log In to{" "}
                  <span style={{ fontWeight: "bold", color: "#304e7e" }}>
                    HomeHaven
                  </span>
                </p>
                <div className="input-field">
                  <input
                    id="loginEmail"
                    placeholder="Email"
                    className="validate"
                    type="email"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="loginPassword"
                    type="password"
                    placeholder="Password"
                    className="validate"
                  />
                </div>
                <button
                  className="second-button"
                  onClick={login}
                  style={{
                    cursor: "pointer",
                  }}>
                  Log In
                </button>
                <p
                  style={{
                    marginRight: "-60px",
                  }}>
                  Don't have an account?{" "}
                  <a onClick={togglePopupRegister}>
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginLeft: "-40px",
                      }}>
                      Register
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div
              className={openRegister ? "popup active" : "popup"}
              id="popup-2">
              <div
                className="content"
                style={{
                  height: "525px",
                  top: "375px",
                  positio: "absolute",
                  zIndex: "101",
                }}>
                <div className="close-btn" onClick={togglePopupRegister}>
                  x
                </div>

                <p className="log1">
                  Create Your{" "}
                  <span style={{ fontWeight: "bold", color: "#304e7e" }}>
                    Home Haven
                  </span>{" "}
                  Account
                </p>
                <div className="input-field">
                  <input
                    id="registerName"
                    placeholder="Name"
                    className="validate"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerPhoneNumber"
                    placeholder="Phone Number"
                    className="validate"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerEmail"
                    placeholder="Email"
                    className="validate"
                    type="email"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerPassword"
                    placeholder="Password"
                    className="validate"
                    type="password"
                  />
                </div>
                <button
                  className="second-button"
                  onClick={register}
                  style={{
                    cursor: "pointer",
                  }}>
                  Register
                </button>
                <p style={{ marginRight: "-50px" }}>
                  Already have an account?{" "}
                  <a onClick={togglePopupLogin}>
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginLeft: "-40px",
                      }}>
                      Login
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div
              onClick={togglePopupLogin}
              id="loginBtn"
              style={{
                marginLeft: "-30px",
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "#304e7e",
                borderRadius: "10px",
                padding: "2px",
                marginTop: "24px",
              }}>
              <img
                style={{
                  width: "34px",
                  marginBottom: "-12px",
                  backgroundColor: "#304e7e",
                  marginLeft: "4px",
                  borderRadius: "50px",
                }}
                src="/person-icon.png"
                alt="Person Icon"
              />
              <button
                className="log"
                onClick={togglePopupLogin}
                style={{
                  backgroundColor: "#304e7e",
                  borderRadius: "4px",
                  padding: "10px",
                  color: "white",
                }}>
                Log In
              </button>
            </div>

            <button
              id="logoutButton"
              style={{ display: "none" }}
              onClick={logout}
              className="logout">
              Logout
            </button>
          </>
        }
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu icon"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          />
        </div>
        <div className={openSideMenu ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/list">Listings</Link>
          {/* <a href="/">Sign In</a>
          <a href="/">Sign Up</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
