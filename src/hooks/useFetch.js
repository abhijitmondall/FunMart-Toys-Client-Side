const useFetch = async (route, options) => {
  const fetchOptions = options || { method: "GET" };

  try {
    const res = await fetch(
      `https://fun-mart-toys-api-v1.vercel.app/api/v1/${route}`,
      {
        ...fetchOptions,
      }
    );

    if (!res.ok) throw new Error(res.message);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default useFetch;
