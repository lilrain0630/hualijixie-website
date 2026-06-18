export const metadata = {
  title: '产品中心 - 绍兴华力机械科技',
  description: '了解我们的产品系列，包括反应设备、混合乳化设备、储存周转设备等',
}

const productCategories = [
  {
    id: 1,
    title: '反应设备',
    description: '系列反应釜，满足多种化工反应工艺需求',
    features: [
      '高效传热设计',
      '精确温控系统',
      '多种规格可选',
      '可定制化工艺',
    ],
  },
  {
    id: 2,
    title: '混合与乳化设备',
    description: '高效乳化罐、搅拌机、打浆机',
    features: [
      '高效混合效率',
      '均匀乳化效果',
      '低能耗设计',
      '易于清洗维护',
    ],
  },
  {
    id: 3,
    title: '储存与周转设备',
    description: '各类规格的放料桶、水箱',
    features: [
      '多种容积选择',
      '防腐蚀材料',
      '安全可靠',
      '环保设计',
    ],
  },
]

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">产品中心</h1>
          <p className="text-xl text-blue-100">
            为您提供全方位的工业设备解决方案
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:[direction:rtl]' : ''
                }`}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    了解详情
                  </button>
                </div>
                <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                  <div className="text-6xl">📦</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            需要定制化解决方案？
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            我们的专业团队随时准备为您服务
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            立即咨询
          </button>
        </div>
      </section>
    </main>
  )
}
