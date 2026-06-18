export const metadata = {
  title: '关于我们 - 绍兴华力机械科技',
  description: '了解绍兴华力机械科技有限公司的发展历程和核心价值观',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl text-blue-100">
            20年行业经验，服务全球500+客户
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                绍兴华力机械科技有限公司是一家深耕于印染纺织化工设备领域的专业制造与服务商。公司坐落于历史悠久、纺织业发达的绍兴市，凭借得天独厚的地域产业优势和持续的技术创新，已发展成为一家集研发设计、生产制造、销售安装、维修服务于一体的综合性科技企业。
              </p>
              <p className="text-gray-600 leading-relaxed">
                公司专注于为印染、纺织、化工及相关企业提供高性能、高质量的工艺设备解决方案。
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
              <div className="text-6xl">🏭</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            我们的使命与愿景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">使命</h3>
              <p className="text-gray-600">
                为客户的安全生产和高效运营保驾护航，成为印染纺织行业客户值得信赖的合作伙伴。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">愿景</h3>
              <p className="text-gray-600">
                致力于推动印染纺织行业的技术进步与发展，成为行业领先的设备制造商。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">价值观</h3>
              <p className="text-gray-600">
                诚信、专业、创新、共赢 - 以客户为中心，持续创新和改进。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            我们的成就
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">年行业经验</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">服务客户</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">设备安装</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">客户满意度</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            专业的团队
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            我们拥有一支经验丰富、专业素质高的技术和服务团队
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <div className="text-6xl">👨‍💼</div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">专业人员</h3>
                  <p className="text-sm text-gray-600">技术专家</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
