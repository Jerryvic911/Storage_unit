import React from 'react'
import { useReadContract, useNetwork } from "@starknet-react/core";
const { chain } = useNetwork();
import { useContractRead } from "@starknet-react/core";
import {  } from "../abi/abi";

const GetUserBalance = () => {
      // TODO - Fetch Students from Contract
  const contractAddress =
  "0x03efd6a3549a0ea66468ba7f87d177bf2f18cb19ae7bba907f14f5897b9d9ed2";
const {
  data: allStudents,
  refetch: allStudentsRefetch,
  isFetching,
  isLoading: readIsLoading,
} = useContractRead({
  functionName: "get_all_students",
  args: [],
  abi: ,
  address: contractAddress,
  // watch: true,
});
  return (
    <div>
        
    </div>
  )
}

export default GetUserBalance


 

