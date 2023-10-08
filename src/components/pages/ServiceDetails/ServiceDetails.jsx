import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();

  const desiredDetails = services.find((details) => details.id === idInt);
  console.log(desiredDetails);
  const { title,image } = desiredDetails;
  console.log(title);

  return (
    <div>
      <h1>Hello I am all time enjoyable service details of id {id}</h1>
      <p>{title}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default ServiceDetails;
