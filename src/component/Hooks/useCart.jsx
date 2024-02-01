import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;

// const token = localStorage.getItem("access-token");
// option use this option or axiosSecure
// queryFn: async () => {
//   const res = await fetch(
//     `http://localhost:4000/carts?email=${user.email}`,
//     {
//       headers: {
//         authorization: `bearer ${token}`,
//       },
//     }
//   );
//   return res.json();
// },
