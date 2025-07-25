import axios from "axios";
import useSWR from "swr";

const getUsers = (url: string) => axios.get(url).then(res => res.data);

function useUsers() {
  return useSWR(
    "https://jsonplaceholder.typicode.com/users",
      getUsers,
    {
      fallbackData: [], // бонус: кэширование с fallbackData
    }
  );
}

export default useUsers;