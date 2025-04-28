import React from 'react'

type Props = {}

export const userQueryAutomations = () => {
  return useQuery({
    queryKey:["user-automation"],
    queryFn: getAllAutomations,
});
};


export const useQueryAutomation=()=>{
    return  useQuery({
        
    }

    )
}