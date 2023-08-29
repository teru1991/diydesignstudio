// services/MaterialService.js
interface MaterialData {
    name: string;
    length: number;
    width: number;
    height: number

}
export const registerMaterial = async (lumber:MaterialData) => {
    const response = await fetch("/materials/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(lumber),
    });
    const data = await response.json();
    return data;
};
