import { HOST_API } from "../../services";

export const deleteWorkflow = async (id) => {
  try {
    const response = await fetch(`${HOST_API}/workflow/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete workflow");
    }

    return response.json();
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    console.error("Error deleting workflow:", error);
    throw error; // Ném lỗi để các phần gọi hàm này có thể xử lý tiếp
  }
};
