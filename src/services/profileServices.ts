import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

const USER_ID = "6473487fa17e6c0ae79b0a5a"

const CLINIC_ID = "6473487fa17e6c0ae79b0a5c"

// get user infos
const getUserInfos = createAsyncThunk("/get/users/:id", async () => {
    try {
        const response = await api.get("/users/" + USER_ID)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

// update user infos
const updateUserInfos = createAsyncThunk("/put/users/:id", async (data: any) => {
    try {
        const response = await api.put("/users/" + USER_ID, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

// update user avatar
const updateUserAvatar = createAsyncThunk("/patch/users/:id/avatar", async (data: any) => {
    try {
        const response = await api.patch("/users/" + USER_ID + "/avatar", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
})

// get clinic infos
const getClinicInfos = createAsyncThunk("/get/clinics/id", async () => {
    try {
        const response = await api.get("/clinics/" + CLINIC_ID)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

// update clinic infos
const updateClinicInfos = createAsyncThunk("/put/clinics/id", async (data: any) => {
    try {
        const response = await api.put("/clinics/" + CLINIC_ID, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export { getUserInfos, updateUserInfos, getClinicInfos, updateClinicInfos, updateUserAvatar }
