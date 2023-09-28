import { Layout, message } from 'antd'
import { SearchOutlined, SkinOutlined } from '@ant-design/icons'
import './index.scss'
import { menuList } from '@/common'
import { MenuList } from '@/common/interFace.ts'

const { Header } = Layout

const HeaderLayOut = () => {
	const [messageApi, contextHolder] = message.useMessage()
	const handleOnClick = (item: MenuList) => {
		messageApi.open({
			key: 1,
			content: `先不要点我(${item.title})`,
			type: 'info'
		})
	}
	return (
		<Header className='lay-header flex items-center justify-between dark:bg-cyan-950'>
			{contextHolder}
			{/*  左侧昵称*/}
			<div className='lay-header__left'>
				<h1 className='title base-text-color'>言希</h1>
			</div>
			{/*  中间菜单*/}
			<div className='lay-header__center'>
				<div className='lbh-tabs flex justify-between base-text-color'>
					{menuList.map(v => {
						return (
							<div
								className='text-xl lbh-tabs__item cursor-pointer hover:text-blue-500 dark:hover:text-green-700 duration-1000'
								key={v.path}
								onClick={() => handleOnClick(v)}
							>
								{v.title}
							</div>
						)
					})}
				</div>
			</div>
			{/*  右侧按钮*/}
			<div className='lay-header__right'>
				{/*搜索*/}
				<SearchOutlined className='cursor-pointer base-text-color' />
				{/*  颜色切换*/}
				<SkinOutlined className='ml-5 cursor-pointer base-text-color' />
			</div>
		</Header>
	)
}
export default HeaderLayOut
