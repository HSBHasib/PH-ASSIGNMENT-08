export const tilesData = async () => {
    const res = await fetch('http://localhost:3000/tilesData.json');
    const data = await res.json();
    return data;
}