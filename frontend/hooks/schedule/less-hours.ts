import axiosClient from "../config";

export const LessHoursAPI = {
  generateSchedule: async (data: any) => {
    const response = await axiosClient.post("/schedule/parse", data);
    return response.data;
  }
}
