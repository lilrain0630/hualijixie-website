import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">绍兴华力机械</h3>
            <p className="text-sm leading-relaxed">
              专业印染纺织化工设备制造商，为全球客户提供高质量的工业解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  产品中心
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">产品分类</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  反应设备
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  混合乳化设备
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  储存周转设备
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  配件供应
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-400">电话</p>
                <p className="text-white font-semibold">15221695185</p>
              </li>
              <li>
                <p className="text-gray-400">地址</p>
                <p className="text-white text-xs leading-relaxed">浙江省绍兴市越城区马山街道启圣路</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} 绍兴华力机械科技有限公司 版权所有
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                用户协议
              </a>
              <a href="/contact" className="text-sm hover:text-white transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
