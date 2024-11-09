import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"


let API_URL = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})


axiosInstance.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => {

        if (error.code === "ECONNABORTED") {
            toast.error("Request timed out. Please check your network connection.")
        } else if (error.message.includes("Network Error")) {
            toast.remove()
            toast.error("Network Error occurred. Please check your network connection.")
        } else {
            console.log("An unexpected error occurred:", error.message)
        }

        if (error?.response?.status === 401) {
            const currentPath = window.location.pathname
            if (currentPath !== "/login" && currentPath !== "/signup") {
                window.location.replace(`/login?session_expired=true&redirect=${encodeURIComponent(currentPath)}`)
            }
        }

        return Promise.reject(error)
    },
)

export default axiosInstance

const makeRequest = async (
    method: "get" | "post" | "patch" | "put" | "delete",
    path: string,
    data: any,
    headers: any = {},
    select: boolean = true,
) => {
    const endpoint = path ? `${API_URL}${path.charAt(0) === "/" ? "" : "/"}${path}` : null
    if (!endpoint) {
        console.error("API request error: No endpoint provided")
        throw new Error("API request error: No endpoint provided")
    }


    let config: IAxiosRequestConfig = {
        method: method,
        url: endpoint,
        data: data,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    }

    console.debug(`🚀 Requesting Api: %c${config.method.toUpperCase()} ===> %c${config?.url}\n`, "color: yellow", "color: yellow")

    return await axiosInstance(config)
        .then((res) => {
            return select ? res.data : res.data
        })
        .catch((err: AxiosError) => {
            return Promise.reject(err)
        })
}

export const api = {
    get: async (path: string, headers: any = {}, select?: boolean) => await makeRequest("get", path, null, headers, select),
    post: async (path: string, data: any, headers: any = {}, select?: boolean) => await makeRequest("post", path, data, headers, select),
    patch: async (path: string, data: any, headers: any = {}, select?: boolean) => await makeRequest("patch", path, data, headers, select),
    put: async (path: string, data: any, headers: any = {}, select?: boolean) => await makeRequest("put", path, data, headers, select),
    delete: async (path: string, data: any, headers: any = {}, select?: boolean) => await makeRequest("delete", path, data, headers, select),
}


interface IAxiosRequestConfig {
    method: "get" | "post" | "patch" | "put" | "delete"
    url: string
    headers: any
    data?: any
}


export const handleApiError = (error: AxiosError) => {
    let message = "An unexpected error occurred. Please try again later."
    console.error(error)
    if ((error.response?.data as any)?.message) {
        message = (error.response?.data as any)?.message
    }

    if (error.response.status !== 401) toast.error(message)
}
