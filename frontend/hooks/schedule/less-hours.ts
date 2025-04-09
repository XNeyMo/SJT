import axiosClient from "../config";

export const LessHoursAPI = {
  generateSchedule: async (data: any) => {
    const response = await axiosClient.post("/schedule/wizard", data);
    return response.data;
  },

  generateByFile: async (data: FormData) => {
    const response = await axiosClient.post("/schedule/file", data, { transformRequest: (data) => data });
    return response.data;
  },
}
