const useFetch = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(res.message);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default useFetch;
