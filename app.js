import { fetchData } from "./utils/httpReq.js";

const render = async () => {
  const productsData = await fetchData();
  console.log(productsData);
};

document.addEventListener("DOMContentLoaded", render);
