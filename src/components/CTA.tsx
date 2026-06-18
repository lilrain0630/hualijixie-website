'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          准备好提升您的生产效率了吗？
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          让华力机械科技为您提供专业的工业设备解决方案，助力您的企业发展。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            立即咨询
          </Link>
          <Link
            href="/products"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-block"
          >
            了解产品
          </Link>
        </div>
      </div>
    </section>
  )
}
