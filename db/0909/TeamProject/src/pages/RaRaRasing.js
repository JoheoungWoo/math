import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const RaRaRasing = () => {
  const [v] = useSearchParams();
  console.log(v);
  console.log(v.get(id));
  rr = v.get(id);

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/member/id?id=${rr}`
      );
      console.log(res);
    };
    f();
  }, []);

  return <div>RaRaRasing</div>;
};

export default RaRaRasing;
