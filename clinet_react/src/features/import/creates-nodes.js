import { HOST_API } from "../../services";

export const createImportNodes = async (nodesData) => {
  try {
    const response = await fetch(`${HOST_API}/nodes/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nodesData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create import nodes : ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error creating  import nodes:", error.message);
    throw error;
  }
};
