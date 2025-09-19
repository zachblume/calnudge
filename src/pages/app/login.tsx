import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/components/auth/AuthProvider'
import { SignIn } from '@/components/auth/SignIn'

export default function LoginPage() {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push('/app')
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-lg text-gray-600">Loading...</div>
            </div>
        )
    }

    if (user) {
        return null // Will redirect to /app
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        CalNudge
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Never miss another meeting again
                    </p>
                </div>
                <SignIn />
            </div>
        </div>
    )
}
