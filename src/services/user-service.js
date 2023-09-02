import { myAxios } from "./helper";

export const signupService = (user)=>{
    return myAxios.post("/auth/service/login",user).then((response)=>response.data)
    .catch(error => {
        console.error('Error:', error);
        // Handle the error here
    });
};

export const signupWarehouse = (user)=>{
    return myAxios.post("/auth/warehouse/login",user).then((response)=>response.data).catch(error => {
        console.error('Error:', error);
        // Handle the error here
    });
};

export const signupPlanning = (user)=>{
    return myAxios.post("/auth/planning/login",user).then((response)=>response.data);
};

export const createServiceCenterRequest = (user)=>{
    return myAxios.post("/service/createRequest",user).then((response)=>response.data);
};

export const updatePendingWarehouse = (user)=>{
    return myAxios.post("/warehouse/updatePending",user).then((response)=>response.data);
};
