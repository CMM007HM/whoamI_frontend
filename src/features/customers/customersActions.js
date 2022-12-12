import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createCustomer = createAsyncThunk(
    'customers/createCustomer',
    async({ firstName, middleName, lastName, email, phone }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}api/customers`, { firstName, middleName, lastName, email, phone }, config);
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

export const getCustomers = createAsyncThunk(
    'customers/getCustomers',
    async(arg, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}api/customers`, config);
            // console.log(data)
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

export const getOneCustomer = createAsyncThunk(
    'customers/getOneCustomer',
    async(customers, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { _id } = customers
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}api/customers/${_id}`, config);
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

export const updateCustomer = createAsyncThunk(
    'customers/updateCustomer',
    async({ id, firstName, middleName, lastName, email, phone }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const config = {
                headers: {
                    'x-auth-token': `${auth.token}`,
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}api/customers/${id}`, { firstName, middleName, lastName, email, phone }, config);
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