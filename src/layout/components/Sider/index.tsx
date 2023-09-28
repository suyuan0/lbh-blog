import { Layout, message } from 'antd'
import './index.scss'
import { menuList } from '@/common'
import { MenuList } from '@/common/interFace.ts'
// import { MenuList } from '@/common/interFace.ts'

const { Sider } = Layout

const HeaderSider = () => {
	const [messageAPI, contextHolder] = message.useMessage()
	const handleOnClick = (item: MenuList) => {
		messageAPI.open({
			key: 1,
			content: `先不要点我(${item.title})`,
			type: 'info'
		})
	}

	return (
		<Sider className='lbh-sider' breakpoint='xl'>
			{contextHolder}
			{/*  标题*/}
			<div className='lay-sider__title'>
				<h1 className='title base-text-color'>言希</h1>
			</div>
			{/*  菜单*/}
			<div className='lay-sider__menu'>
				<div className='lbh-tabs flex flex-col base-text-color'>
					{menuList.map(v => {
						return (
							<div onClick={() => handleOnClick(v)} key={v.path} className='lbh-tabs__item'>
								{v.title}
							</div>
						)
					})}
				</div>
			</div>
		</Sider>
	)
}

export default HeaderSider
