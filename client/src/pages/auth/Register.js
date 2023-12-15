import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import ReactPlayer from 'react-player'
import preview1 from '../../assets/preview2.mp4'
import preview7 from '../../assets/preview5.mp4'
import { toast } from "react-toastify";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const landing = [
    {
      video: preview1,
    },
    {
      video: preview7,
    },
  ]

  const items = landing?.map((vid, index) => (
    <div className="flex">
      <ReactPlayer
        url={vid?.video} type="video/mp4"
        playing={true}
        loop={true}
        muted={true}
        width={300}
        height={200}
        style={{margin: 10, borderRadius: 1}}
      />
    </div>
  ));
  return (
    <div className="landing">
      {error && <span>{toast(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col md:flex-row h-screen gap-8 items-center justify-center wrap">
          <div className="py-10 md:border-8 md:border-clr px-16 rounded-lg backdrop-blur-md">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
          <div className="hidden md:flex flex-wrap bg-cl_alt rounded-md ">
            {items}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
