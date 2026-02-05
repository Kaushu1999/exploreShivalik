import React, { useState } from "react";
import { FiUser, FiChevronDown } from "react-icons/fi";
import { GiHummingbird } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  Name: "",
  Age: "",
  Email: "",
  PhoneNumber: "",
};

const placeholders = {
  Name: "Enter full name",
  Age: "Enter age",
  Email: "Enter email address",
  PhoneNumber: "Enter phone number",
};

const userSchema = yup.object({
  Name: yup
    .string()
    .min(3)
    .max(15)
    .matches(/^[A-Za-z]+$/, "Name should contain only letters")
    .required("Name is required"),

  Age: yup
    .number()
    .typeError("Age must be a number")
    .positive()
    .integer()
    .required("Age is required"),

  Email: yup.string().email("Invalid email").required("Email is required"),

  PhoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

function App() {
  const navigate = useNavigate();
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Form Submitted Successfully!");
    resetForm();
    setOpenPopUp(false);
  };

  return (
    <div className="w-full">
      <div className="min-h-12 bg-[#1f1f1f] text-white tracking-wider hover:text-[#41c1bd] text-[13px] text-center flex items-center justify-center gap-2">
        <span>Canary Care just got smarter – discover what's new!</span>
        <FaArrowRight />
      </div>

      <div className="bg-white max-w-full px-5">
        <nav className="h-21.5 flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <GiHummingbird size={60} />
              <span className="text-2xl font-bold leading-none">
                Canary <br /> Care
              </span>
            </div>
          </Link>

          <div className="hidden list-none md:flex items-center gap-6 px-4 py-2 rounded-full ml-30 border border-[#f7f4f0]">
              <li
              className="font-medium hover:text-[#41c1bd] cursor-pointer"
              onClick={() => navigate("/professional")}
            >
              Professional
            </li>

            <li
              className="font-medium hover:text-[#41c1bd] cursor-pointer"
              onClick={() => navigate("/personal")}
            >
              Personal
            </li>

            <li
              className="font-medium hover:text-[#41c1bd] cursor-pointer"
              onClick={() => navigate("/technology")}
            >
              Technology
            </li>
            
            <div className="relative group">
              <li className="flex items-center gap-2 font-medium hover:text-[#41c1bd] cursor-pointer">
                Discover
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </li>

              <ul className="absolute z-10 top-full left-8 mt-2 w-50 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <li className="px-4 py-2 border-b hover:text-[#41c1bd]">
                  About
                </li>
                <li className="px-4 py-2 border-b hover:text-[#41c1bd]">
                  Support
                </li>
                <li className="px-4 py-2 hover:text-[#41c1bd]">News</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-[#f7f4f0] flex items-center justify-center hover:bg-black hover:text-white cursor-pointer"
              onClick={() => setOpenPopUp(true)}
            >
              <FiUser size={18} />
            </div>

            {openPopUp && (
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer"
                onClick={() => setOpenPopUp(false)}
              >
                <div
                  className="bg-white shadow-2xl rounded-xl p-6 w-md border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-semibold mb-3">User Details</h3>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={userSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      {["Name", "Age", "Email", "PhoneNumber"].map(
                        (field, id) => (
                          <div key={id} className="my-3">
                            <label className="block text-sm font-medium mb-1">
                              {field}
                            </label>

                            <Field
                              name={field}
                              type={field === "Age" ? "number" : "text"}
                              placeholder={placeholders[field]}
                              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-[#41c1bd]"
                            />

                            <ErrorMessage
                              name={field}
                              component="p"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                        )
                      )}

                      <div className="flex justify-end gap-3 mt-4">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
                          onClick={() => setOpenPopUp(false)}
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="px-4 py-2 bg-yellow-400 text-white rounded cursor-pointer"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            )}

            <button
              className="px-6 py-3 rounded-full bg-[#f7f4f0] hover:bg-black hover:text-white cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>

            <button
              className="px-6 py-3 rounded-full bg-black text-[#ffe319] flex items-center gap-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              Shop
              <FaArrowRight />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
