import { createSlice } from '@reduxjs/toolkit'

const webhookSlice = createSlice({
  name: 'webhook',
  initialState: {
    webhookData: null,
    sources: {},
  },
  reducers: {
    setWebhookData: (state, action) => {
      state.webhookData = action.payload
    },
    setData(state, action) {
      const { sourceName, data } = action.payload
      state.sources[sourceName] = data
    },
  },
})

export const { setWebhookData, setData } = webhookSlice.actions

export const selectWebhookData = (state) => state.webhook.webhookData

export default webhookSlice.reducer
