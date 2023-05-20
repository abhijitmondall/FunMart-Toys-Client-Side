const useFetch = async (route, options) => {
  const fetchOptions = options || { method: "GET" };

  try {
    const res = await fetch(
      `https://fun-mart-toys-api-v1.vercel.app/api/v1/${route}`,
      {
        ...fetchOptions,
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default useFetch;
