const advantages = [
  {
    title: '技术专业',
    description: '深刻理解印染纺织化工工艺，产品贴合生产实际需求，具有20年以上的行业经验。',
  },
  {
    title: '质量可靠',
    description: '严格把控原材料、生产流程及产品质量，每台设备都经过严格测试，坚固耐用。',
  },
  {
    title: '服务周全',
    description: '快速响应的服务团队，提供从售前咨询到售后支持的一站式服务，让您无后顾之忧。',
  },
  {
    title: '客户导向',
    description: '坚持以客户为中心，根据客户特定需求提供定制化解决方案，实现互利共赢。',
  },
]

export default function Advantages() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的核心优势
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            诚信、专业、创新、共赢
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
