import axios from "axios";

const logSign = createAsyncThunk(
  "users/update",
  async (userData, { rejectWithValue }) => {
    const { api, ...fields } = userData;
    try {
      const response = await axios.get(api);
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
