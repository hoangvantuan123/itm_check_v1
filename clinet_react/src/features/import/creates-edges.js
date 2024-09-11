import { HOST_API } from "../../services";

export const createImportEdges = async (setEdgesData) => {
  try {
    const response = await fetch(`${HOST_API}/edges/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setEdgesData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create import edges : ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error creating  import edges:", error.message);
    throw error;
  }
};
