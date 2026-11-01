import { useState } from "react";

const Signup = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImg = (e) => {
    console.log(e.target);

    const file = e.target.files[0];
    setProfileImg(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
      console.log(preview);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-700 px-4">
      <form className="bg-white/40 w-full max-w-3xl rounded-2xl shadow-2xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-200">
          Create your account.
        </h2>

        {/* profile pic */}

        <div className="flex justify-center mb-8">
          <label htmlFor="profileUpload" className="cursor-pointer relative">
            <div className="w-28 h-28 rounded-full bg-gray-400 overflow-hidden border-4 border-gray-100 shadow-md">
              {/* if image  is uploaded then  display image else display 'Upload' */}

              {preview ? (
                <img
                  src={preview}
                  alt="preview image"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-200 text-sm">
                  Upload
                </div>
              )}
            </div>

            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImg}
            />
          </label>
        </div>
        {/*  Input fields  */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input name="firstName" type="text" placeholder="First name" />
          <Input name="lastName" type="text" placeholder="Last name" />
          <Input name="userEmail" type="email" placeholder="abc@mail.com" />
          <Input name="userMobile" type="tel" placeholder="+91 xxxxx xxxxx" />
          <Input name="userName" type="text" placeholder="User Name " />
          <Input name="userpassword" type="password" placeholder="**********" />
          {/* <Input name="userBio" type="text" placeholder="+91 xxxxx xxxxx" /> */}
        </div>
        <textarea
          name="userBio"
          id=""
          placeholder="Tell us about yourself..."
          className="w-full mt-6 p-4 border border-gray-300 rounded-xl focus:outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full mt-8 bg-linear-to-r from-indigo-900 to-indigo-500 text-white py-3 rounded-2xl 
          text-lg tracking-widest font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

const Input = ({ name, type = "text", placeholder, value }) => {
  return (
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-2xl bg-white text-gray-800
       placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
       transition-all duration-300"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Signup;
