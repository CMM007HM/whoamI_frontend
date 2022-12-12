import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createCategory = createAsyncThunk(
    'category/createCategory',
    async({ name }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}api/categories`, { name }, config);
            // window.location.reload(false);
            return data;
        } catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async(arg, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}api/categories`, config);
            // console.log('Data', data)
            return data;
        }
        catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async({id, name}, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}api/categories/${id}`, { name }, config);
            // window.location.reload()
            return data;
        } catch (error) {
            if (error.response && error.response.data?.message) {
                return rejectWithValue(error.response.data?.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)