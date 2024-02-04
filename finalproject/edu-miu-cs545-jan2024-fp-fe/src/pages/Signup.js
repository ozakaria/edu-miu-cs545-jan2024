import React, { useContext, useRef } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Signup() {
  const formRef = useRef(null);
  const nav = useNavigate();
  const { setUser } = useContext(UserContext);
  const [ query ] = useSearchParams()
  const return_url = query.get("return")

  const loginHandler = (body) => {
    axios.post('http://localhost:8080/api/v1/auth/login', body)
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        manageLocalStorage(res.data);
        navToRightPageBasedOnRole(res.data.role)
      })
      .catch(err => console.log(err))
  }
  const manageLocalStorage = (data) => {
    localStorage.setItem("token", data.accessToken)
        localStorage.setItem("refresh", data.refreshToken)
        localStorage.setItem("role", data.role)
        localStorage.setItem("firstName", data.firstName)
        localStorage.setItem("id", data.id)
        localStorage.setItem("status", data.status)
  }
  const navToRightPageBasedOnRole = (role) => {
    switch (role) {
      case "CUSTOMER":
        if(return_url) {
          nav(return_url, { replace: true });
          break;
        }
        nav("/properties", { replace: true });
        break;

      case "OWNER":
        nav("/owner/properties", { replace: true });
        break;

      case "ADMIN":
        nav("/properties", { replace: true });
        break;

      default:
        nav("/", { replace: true });
        break;
    }
  }
  const signUpHandler = () => {
    const form = formRef.current;
    const body = {
      firstName: form["firstName"].value,
      lastName: form["lastName"].value,
      email: form["email"].value,
      password: form["password"].value,
      role: form["role"].value,
    };

    axios
      .post("http://localhost:8080/api/v1/auth/signup", body)
      .then(() => {
        alert("Successfully registered");
        const loginBody = {
          email: form["email"].value,
          password: form["password"].value,
        };
        loginHandler(loginBody);
        // nav("/login");
      })
      .catch((err) => console.log(err));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    signUpHandler();
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex border px-8 py-8 rounded-md flex-col"
        ref={formRef}
        onSubmit={onSubmit}
      >
        <img
          className="hidden h-8 w-auto lg:block mb-3"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
          alt="Your Company"
        />
        <h1 className="text-center text-lg mb-6 font-medium">Signup</h1>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          placeholder="First Name"
          name="firstName"
          type="text"
        />{" "}
        <br />
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          placeholder="Last Name"
          name="lastName"
          type="text"
        />{" "}
        <br />
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          placeholder="E-mail"
          name="email"
          type="email"
        />{" "}
        <br />
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          placeholder="Password"
          name="password"
          type="password"
        />{" "}
        <br />
        <div className="flex justify-evenly">
          <label className="mr-3" htmlFor="cus">
            <input id="cus" type="radio" name="role" value="CUSTOMER" />
            <span className="ml-1">Customer</span>
          </label>
          <label className="mr-3" htmlFor="own">
            <input id="own" type="radio" name="role" value="OWNER" />
            <span className="ml-1">Owner</span>
          </label>
        </div>
        <button className="rounded-md mt-8 px-3 py-2 bg-sky-600 p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none transitions">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
