import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '绍兴华力机械科技有限公司 - 印染纺织化工设备制造商',
  description: '专业印染纺织化工设备制造商，提供反应设备、混合乳化设备、储存设备等完整解决方案',
  keywords: '印染设备,纺织设备,化工设备,反应釜,乳化罐,绍兴',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
