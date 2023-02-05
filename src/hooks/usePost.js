import axios from "axios";
import { useState } from "react";

const usePost = async (url, post) => {
  const [dataPost, setData] = useState([]);
  const [loadingPost, setLoading] = useState(false);
  const [errorPost, setError] = useState();
  setLoading(true)
  try {
    await axios
    .post(url, post)
    .then((res) => setData(res.data))
    .catch((err) => setError(err));
} catch (error) {
    console.log(error);
}
setLoading(false)
  return {dataPost,loadingPost,errorPost}
};

export default usePost;
