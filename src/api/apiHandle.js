import axios from "axios";

const BASE_URL="http://localhost:3006/api"
// const BASE_URL="https://vintagemotorsrentals.herokuapp.com/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxZDkyZGYwY2VlZjgwNDlkMzBlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDgwNDk0MCwiZXhwIjoxNjUxMDY0MTQwfQ.md91PjkU9YmOHodPCBzlCZ6nlgoimM8X3GgsAQzuYAs"

export const publicRequest=axios.create({
    baseURL:BASE_URL
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`${TOKEN}`}
})