// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div className="max-w-sm p-8 mx-auto my-20 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="mx-auto rounded-full w-36 h-36"
      />
      <h1 className="my-4 text-xl text-center text-blue-800">Kenny Bright</h1>
      <p className="text-base text-center text-gray-600">
        I Love to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
