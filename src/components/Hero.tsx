export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              印染纺织化工设备解决方案
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              绍兴华力机械科技有限公司是一家专业的工业设备制造商，致力于为印染、纺织、化工企业提供高性能、高质量的设备和服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                了解产品
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                立即咨询
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-blue-500 bg-opacity-20 rounded-xl p-12 border border-blue-400">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <p className="text-blue-100">年行业经验</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <p className="text-blue-100">服务客户</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <p className="text-blue-100">设备安装</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <p className="text-blue-100">客户满意度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
