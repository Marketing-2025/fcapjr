// pages/api/conversion.ts
/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// instancia Axios sem Bearer, pois usaremos API Key
const rd = axios.create({
  baseURL: 'https://api.rd.services'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  try {
    console.log('Payload conversion event:', req.body)

    const response = await rd.post(
      '/platform/conversions',
      req.body,
      {
        // envia sua API Key como query string ?api_key=
        params: { api_key: process.env.RD_API_KEY }
      }
    )

    console.log('RD Station returned:', response.data)
    return res.status(200).json(response.data)
  } catch (err: any) {
    console.error('RD Station error:', err.response?.data || err.message)
    const status = err.response?.status || 500
    const data = err.response?.data || { message: err.message }
    return res.status(status).json(data)
  }
}
