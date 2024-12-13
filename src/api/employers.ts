const fetchEmployers = async () => {
  try {
    const data = {
      data: ["employers"],
      status: "OK",
    };

    return data;
  } catch (err) {
    throw err;
  }
};

export { fetchEmployers };
