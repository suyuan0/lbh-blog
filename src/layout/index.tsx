import { Layout } from 'antd'
import HeaderLayOut from '@/layout/components/Header'
import HeaderSider from '@/layout/components/Sider'
import HeaderMain from '@/layout/components/Main'

const Index = () => {
	return (
		// <Space direction='vertical' className='w-full f-full' size={[0, 48]}>
		<Layout className='h-screen'>
			<HeaderLayOut />
			<Layout hasSider className='h-full'>
				<HeaderSider />
				<HeaderMain />
			</Layout>
		</Layout>
		// </Space>
	)
}

export default Index
