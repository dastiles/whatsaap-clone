import { useRouter } from "next/router";
import useAuth from "@/hook/auth";

export default function AppLayout({ children }) {
    const auth = useAuth()
    const router = useRouter()

    if (router.pathname !== '/login') {
        return router.push('/')
    } else {
        return children
    }
}