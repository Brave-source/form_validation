const dev = "http://localhost:3000";
const prod = "http://ec2-34-221-201-175.us-west-2.compute.amazonaws.com";

export const baseURL =
  window.location.hostname.split(":")[0] === "localhost" ||
  window.location.hostname.includes("192")
    ? dev
    : prod;
