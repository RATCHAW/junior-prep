import React from "react";
import { useDispatch } from "react-redux";
import { setView } from "../../reduxToolkit/features/modalSlice";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <form className="flex flex-col items-center w-full gap-10 text-gray-900">
      <div>
        <button className="flex items-center text-base font-semibold">
          <img src="/googlelogo.png" alt="" className="mr-2 h-[20px]" />
          Continue with Google
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-[1px] w-5 bg-gray-300"></div>
        <span className="font-semibold">OR</span>
        <div className="flex-1 h-[1px] w-5 bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="border-gray-300 rounded-lg"
          type="text"
          placeholder="Email"
        />
        <input
          className="border-gray-300 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <input
          className="border-gray-300 rounded-lg"
          type="password"
          placeholder="Confirm Password"
        />
        <button className=" self-center px-6  text-sm md:text-base  py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700">
          Register
        </button>
        <div className="text-xs text-center">
          <p>
            <span>Already Have an account?</span>
            <button
              type="button"
              onClick={() => {
                dispatch(setView({ view: "Login" }));
              }}
              className="ml-1 text-blue-700"
              href="/"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
