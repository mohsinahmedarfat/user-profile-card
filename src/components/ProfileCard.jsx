import LoadingSkeleton from "./LoadingSkeleton";

const ProfileCard = ({ user }) => {
  if (!user) return <LoadingSkeleton />;

  //   console.log(user.user);
  const { gender, name, phone, picture, email } = user;
  //   console.log(user.results[0].gender);
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="p-10 w-[625px] h-80 bg-white">
        <div className="border-black border-2 rounded-2xl shadow-xl px-8 py-10 h-full">
          <div className="flex gap-10">
            <div className="border-black border-2 rounded-2xl w-1/3 h-full">
              <img src={picture?.large} alt="" className="rounded-2xl w-full" />
            </div>
            <div className="p-3 text-start space-y-4">
              <strong>
                {name?.first} {name?.last}
              </strong>
              <h3>
                <span className="font-bold">Gender:</span> {gender}
              </h3>
              <h3>
                <span className="font-bold">Phone:</span> {phone}
              </h3>
              <h3>
                <span className="font-bold">Email:</span> {email}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
