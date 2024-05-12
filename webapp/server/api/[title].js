import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const domain = process.env.API_DOMAIN

export default defineEventHandler(async (event) => {
  const title = event.context.params.title

  const url = `${domain}/movies?title=${title}`;
  const {data} = await axios.get(url);
  return data
});