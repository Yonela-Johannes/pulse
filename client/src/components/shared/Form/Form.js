import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
import { toast } from "react-toastify";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [register, setRegister] = useState(false);

  const continueHandler = (e) => {
    e.preventDefault();
    if(role.length < 4) return toast('Please select your role');
    if(role === 'donar'){
      if(name.length < 3) return toast('Please enter name, name too short');
    }else if(role === 'admin'){
      if(name.length < 3) return toast('Please enter admin name, name too short');
    }else if(role === 'organisation'){
      if(organisation.length < 3) return toast('Please enter organisation name, name too short');
    }else if(role === 'hospital'){
      if(hospital.length < 3) return toast('Please enter hospital name, name too short');
    }
    if(email.length < 4) return toast('Please enter you name');
    setRegister(true)
  }

  const registerHandler = (e) => {
    e.preventDefault()
    if(password < 8) return toast('Password must not be lest than 8 digits');
    if(phone.length !== 10) return toast('Phone number must equal 10 digits');

    handleRegister(
      e,
      name,
      role,
      email,
      password,
      phone,
      organisation,
      hospital,
    );
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return registerHandler(e)
        }}
      >
        <fieldset>
        <legend className="md:text-start text-clr font-bold mb-2 text-xl md:text-2xl">{formTitle === 'Login' ? "Sign in to your account" : formTitle === "Register" && "Create a new account"}</legend>
        <div className="flex my-4 items-start justify-start">
          <div className="flex items-center gap-2 radio-item">
            <input
              type="radio"
              id="donar"
              name="role"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "donar" && true}
            />
            <label htmlFor="donar" className="text-clr">
              Donar
            </label>
          </div>
          <div className="flex items-center gap-2 radio-item">
            <input
              type="radio"
              id="admin"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "admin" && true}
            />
            <label htmlFor="admin" className="text-clr">
              Admin
            </label>
          </div>
          <div className="flex items-center gap-2 radio-item">
            <input
              type="radio"
              name="role"
              id="hospital"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "hospital" && true}
            />
            <label htmlFor="hospital" className="text-clr">
              Hospital
            </label>
          </div>
          <div className="flex items-center gap-2 radio-item">
            <input
              type="radio"
              name="role"
              id="organisation"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "organisation" && true}
            />
            <label htmlFor="organisation" className="text-clr">
              Organisation
            </label>
          </div>
        </div>
        </fieldset>
        {/* switch statement */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                {!register && (
                  <>
                    {(role === "admin" || role === "donar") && (
                      <InputType
                        labelText={"Name"}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    )}
                    {role === "organisation" && (
                      <InputType
                        labelText={"Organisation name"}
                        labelFor={"fororganisationName"}
                        inputType={"text"}
                        name={"organisation"}
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                      />
                    )}
                  </>
                )}
                  {!register && (
                    <>
                      {role === "hospital" && (
                        <InputType
                          labelText={"Hospital name"}
                          labelFor={"forHospitalName"}
                          inputType={"text"}
                          name={"hospital"}
                          value={hospital}
                          onChange={(e) => setHospital(e.target.value)}
                        />
                      )}

                      <InputType
                        labelText={"email"}
                        labelFor={"forEmail"}
                        inputType={"email"}
                        name={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </>
                  )}
                  {register && (
                    <>
                      <InputType
                        labelText={"Password"}
                        labelFor={"forPassword"}
                        inputType={"password"}
                        name={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputType
                        labelText={"Phone"}
                        labelFor={"forPhone"}
                        inputType={"text"}
                        name={"phone"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </>
                  )}
                </>
              );
            }
          }
        })()}

        <div className="justify-content-between mt-4 ">
          {formType === "login" ? (
            <p>
              Do not have an account?
              <Link className="text-clr" to="/register"> register</Link>
            </p>
          ) : (
            <p>
              Have an account?
              <Link className="text-clr" to="/login"> sign in</Link>
            </p>
          )}
        </div>
        {formTitle === "Register" && (
          !register && (
            <button onClick={continueHandler} className="bg-clr rounded-md text-white py-2 mt-4 px-8 w-full">
              Continue
            </button>
          )
        )}
        {register && (
          <button className="bg-clr rounded-md text-white py-2 mt-4 px-8 w-full" type="submit">
            {submitBtn}
          </button>
        )}
        {formTitle === "Login" && (
          <button className="bg-clr rounded-md text-white py-2 mt-4 px-8 w-full" type="submit">
            {submitBtn}
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
