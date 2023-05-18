const useFetch = async (route, id) => {
  try {
    const res = await fetch(
      `https://assignment-10-server-side-zeta.vercel.app/api/v1/${route}/${
        id || ""
      }`
    );

    if (!res.ok) throw new Error(res.message);

    const data = await res.json();

    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export default useFetch;
