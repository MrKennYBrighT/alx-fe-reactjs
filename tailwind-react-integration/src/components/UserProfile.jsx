function UserProfile() {
  return (
    <div className="max-w-xs mx-auto my-20 transition-shadow duration-300 ease-in-out bg-gray-100 rounded-lg shadow-lg sm:p-4 md:p-8 md:max-w-sm hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="Kenny Bright"
        className="mx-auto transition-transform duration-300 ease-in-out rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110"
      />
      <h1 className="my-4 text-lg text-center text-blue-800 transition-colors duration-300 ease-in-out md:text-xl hover:text-blue-500">
        Kenny Bright
      </h1>
      <p className="text-sm text-center text-gray-600 md:text-base">
        Passionate software developer with a love for clean code, elegant design, and building meaningful digital experiences. Always learning, always creating.
      </p>
    </div>
  );
}

export default UserProfile;
