"use client";
import React from "react";
import useGetKyc from "@/services/kyc-controller/use-get-kyc";

const Home = () => {
  const { data, isLoading, isError } = useGetKyc();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching data</div>;
  return (
    <div>
      <p>
        {data &&
          data.map((item: any) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
      </p>
    </div>
  );
};

export default Home;
