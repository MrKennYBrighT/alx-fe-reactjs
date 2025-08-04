function UserProfile() {
  return (
    <div className="max-w-xs mx-auto my-20 bg-gray-100 rounded-lg shadow-lg sm:p-4 md:p-8 md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 mx-auto rounded-full md:w-36 md:h-36"
      />
      <h1 className="my-4 text-lg text-center text-blue-800 md:text-xl">John Doe</h1>
      <p className="text-sm text-center text-gray-600 md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
