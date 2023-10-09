import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Social Manager | Profile </title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-center">
        Profile
      </h1>
      <hr />
      <div className="flex justify-center items-center my-6">
        <div className="bg-[#FFF] rounded-md shadow-md p-7 space-y-3">
          <div className="flex justify-center">
            <img className="rounded-full" src={user?.photoURL} alt="No Image Found" />
          </div>
          <p className="text-lg">Name : {user?.displayName}</p>
          <p className="text-lg">Email : {user?.email}</p>
          <p className="text-lg">Email Verified : {user?.emailVerified ? "Verified" :"Not Verified"}</p>
          <p className="text-lg">Date Of Birth : Not Provided</p>
          <p className="text-lg">Last Sign In : {user?.metadata?.lastSignInTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
