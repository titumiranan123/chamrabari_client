import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authporvider";
import { useQuery } from "react-query";

const useProduct = () => {

    const { loading } = useContext(Authcontext)


    const { data, refetch, isLoading } = useQuery({
        queryKey: ['Product'],
        enabled: !loading,
        queryFn: async () => {
            // const response = await fetch(`https://chamrabari-backend.vercel.app/products`)
            const response = await fetch(`https://chamrabari-backend-qz4xu1bgc-titumiranan123.vercel.app/products`)
            const data = response.json()
            return data;
        }
    })
    return [data, refetch, isLoading];
}
export default useProduct;