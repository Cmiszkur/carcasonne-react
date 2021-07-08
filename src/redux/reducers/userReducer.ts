import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GET from "../../services/GET";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (data, thunkAPI) => {
        const response = await GET('http://localhost:3030/check')
        return response.username
    }
)

interface userInterface {
    username: string | null | undefined
}

const initialState = {
    username: null
} as userInterface

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //pass
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.username = action.payload
        })
    }
})

const { actions, reducer } = userSlice

// export const { getUser } = actions

export default reducer