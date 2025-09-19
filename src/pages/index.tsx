import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        CalNudge
                    </h1>
                    <Link href="/app/login">
                        <Button variant="secondary">Sign In</Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
                        Never Miss a Meeting Again
                    </h2>
                    <p className="mb-8 text-xl text-gray-700 md:text-2xl">
                        CalNudge syncs with Google Calendar and Zoom to call,
                        text, or page you via Twilio when you&apos;re missing a
                        meeting.
                    </p>
                    <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/app/login">
                            <Button size="large">Get Started Free</Button>
                        </Link>
                        <Button variant="secondary" size="large">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Features */}
                <div className="mx-auto mt-24 max-w-6xl">
                    <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        How It Works
                    </h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-xl bg-white p-8 shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h4 className="mb-2 text-xl font-semibold">
                                Google Calendar Sync
                            </h4>
                            <p className="text-gray-600">
                                Automatically monitors your Google Calendar for
                                upcoming meetings and tracks your attendance
                                status in real-time.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h4 className="mb-2 text-xl font-semibold">
                                Zoom Integration
                            </h4>
                            <p className="text-gray-600">
                                Detects when you haven&apos;t joined a Zoom
                                meeting you&apos;re invited to and sends you
                                instant notifications.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-lg">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                <svg
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <h4 className="mb-2 text-xl font-semibold">
                                Multi-Channel Alerts
                            </h4>
                            <p className="text-gray-600">
                                Get notified via phone call, SMS, or our mobile
                                app (coming soon) powered by Twilio when
                                you&apos;re missing a meeting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mx-auto mt-24 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white">
                    <h3 className="mb-4 text-3xl font-bold">
                        Start Your Free Trial Today
                    </h3>
                    <p className="mb-8 text-xl">
                        Never let another important meeting slip by.
                    </p>
                    <Link href="/app/login">
                        <Button
                            size="large"
                            className="bg-white text-blue-600 hover:bg-gray-100"
                        >
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-24 border-t border-gray-200 bg-white">
                <div className="container mx-auto px-4 py-8">
                    <p className="text-center text-gray-600">
                        © 2024 CalNudge. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
