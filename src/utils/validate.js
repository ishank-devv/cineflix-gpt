export const checkValidData = (email, password) => {
  // const isFullNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
  //   fullname
  // );

  const isEmaildValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmaildValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  // if (!isFullNameValid) return "Full Name is not valid";

  return null;
};
