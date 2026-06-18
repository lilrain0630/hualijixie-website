const products = [
  {
    icon: '⚙️',
    title: '反应设备',
    description: '系列反应釜，满足多种化工反应工艺需求，严格把控工艺参数，确保产品质量稳定。',
  },
  {
    icon: '🔀',
    title: '混合与乳化设备',
    description: '高效乳化罐、搅拌机、打浆机，确保物料混合均匀、细腻，提高生产效率。',
  },
  {
    icon: '📦',
    title: '储存与周转设备',
    description: '各类规格的放料桶、水箱，保障生产流程的顺畅与物料的稳定储存。',
  },
  {
    icon: '🔧',
    title: '安装与维修服务',
    description: '拥有经验丰富的专业工程师团队，提供精准高效的设备安装、调试、保养及故障维修。',
  },
  {
    icon: '🛠️',
    title: '配件供应',
    description: '供应齐全、质量可靠的原厂及优质配件，减少停机时间，保证设备长期稳定运行。',
  },
  {
    icon: '💡',
    title: '技术咨询',
    description: '专业的技术团队为您提供全方位的技术支持和工艺优化建议。',
  },
]

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            主要产品与服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            为您提供全方位、一站式的工业设备解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
