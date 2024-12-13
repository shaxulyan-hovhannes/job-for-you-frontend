const fetchJobs = async () => {
  try {
    const data = {
      data: ["jobs"],
      status: "OK",
    };

    return data;
  } catch (err) {
    throw err;
  }
};

export { fetchJobs };
