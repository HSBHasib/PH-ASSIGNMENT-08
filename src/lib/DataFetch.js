export const tilesData = async () => {
//   const res = await fetch("http://localhost:3000/tilesData.json");
  const res = await fetch(
    "https://ph-a-08-tiles-gellary-server.onrender.com/tiles",
  );
  const data = await res.json();
  return data;
};
