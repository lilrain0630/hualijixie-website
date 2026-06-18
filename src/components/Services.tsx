const services = [
  {
    title: '设备安装',
    description: '专业的安装团队，确保设备精准对位、牢固安装',
  },
  {
    title: '调试运维',
    description: '完整的调试流程，确保设备达到最佳运行状态',
  },
  {
    title: '定期保养',
    description: '制定科学的保养计划，延长设备使用寿命',
  },
  {
    title: '故障维修',
    description: '24小时应急服务，快速定位和排除故障',
  },
  {
    title: '技术升级',
    description: '根据最新技术需求，提供设备升级和改造方案',
  },
  {
    title: '配件供应',
    description: '库存充足的原厂配件，保证配件供应及时性',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            专业的服务支持
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            全方位的技术服务，让您的设备始终处于最佳运行状态
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <div className="text-4xl font-bold text-blue-400 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
