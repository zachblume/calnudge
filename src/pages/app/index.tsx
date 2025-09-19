import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/components/auth/AuthProvider'
import { Button } from '@/components/Button'

export default function AppDashboard() {
    const { user, loading, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/app/login')
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-lg text-gray-600">Loading...</div>
            </div>
        )
    }

    if (!user) {
        return null // Will redirect to login
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            CalNudge
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">
                                Welcome, {user.email}
                            </span>
                            <Button variant="secondary" onClick={signOut}>
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Dashboard
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Your meeting management hub
                        </p>
                    </div>

                    {/* Dashboard Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Calendar Sync
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Connect your Google Calendar to start monitoring
                                meetings
                            </p>
                            <Button className="mt-4">Connect Calendar</Button>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Zoom Integration
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Link your Zoom account for meeting detection
                            </p>
                            <Button className="mt-4">Connect Zoom</Button>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Notification Settings
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Configure how you want to be notified
                            </p>
                            <Button className="mt-4">Settings</Button>
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <div className="mt-8 rounded-lg bg-blue-50 p-6">
                        <h3 className="text-lg font-semibold text-blue-900">
                            👋 Hello World!
                        </h3>
                        <p className="mt-2 text-blue-700">
                            Welcome to CalNudge! You&apos;re successfully signed
                            in and ready to start managing your meeting
                            notifications. Connect your calendar and Zoom
                            account to get started.
                        </p>
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Recent Activity
                        </h3>
                        <div className="mt-4 rounded-lg bg-white p-6 shadow">
                            <p className="text-gray-600">
                                No meetings tracked yet. Connect your calendar
                                to see your upcoming meetings here.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
