import { Inter } from 'next/font/google'
import Sidebar from '@/components/admin/Sidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import '@/app/globals.css'
import { Metadata } from 'next'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700']
})

export const metadata: Metadata = {
    title: {
        default: 'Admin Dashboard | BeLight',
        template: '%s | Admin Dashboard'
    },
    description: 'BeLight Admin Dashboard',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="light">
            <body className={`${inter.className} flex h-screen overflow-hidden`}>
                {/* Sidebar */}
                <Sidebar />

                {/* Main content area */}
                <div className="flex flex-col flex-grow">
                    {/* Admin Header */}
                    <AdminHeader />

                    {/* Scrollable main content */}
                    <main className="flex-grow overflow-auto p-4 bg-base-200">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
