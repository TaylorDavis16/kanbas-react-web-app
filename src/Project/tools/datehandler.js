function trimDob(dob) {
  try {
    return new Date(dob).toISOString().split("T")[0];
  } catch (error) {
    return new Date().toISOString().split("T")[0];
  }
}

function restoreDob(dob) {
  try {
    return new Date(dob).toISOString();
  } catch (error) {
    return new Date().toISOString();
  }
}

export { trimDob, restoreDob };
