/**
 * 区域门店数据
 */
export interface AreaData {
	/** 门店标题 */
	store_title: string
	/** 区域 */
	area: string
	/** 数量 */
	count: number
}

/**
 * 会员等级概况
 */
export interface MemberData {
	/** 等级 */
	level: number
	/** 等级名称 */
	level_name: string
	/** 数量 */
	count: number
}

/**
 * 复购产品概况
 */
export interface OrderData {
	/** 手机号（脱敏） */
	mobile: string
	/** 商品标题 */
	goods_title: string
	/** 价格 */
	price: string
}

/**
 * 热门门店设备数据
 */
export interface DeviceStoreData {
	/** 门店名称 */
	store_name: string
	/** 总次数 */
	total_times: number
	/** 开启次数 */
	open_times: number
}

/**
 * 业务数据看板主数据
 */
export interface DashboardData {
	/** 加盟商总数量 */
	franchisee_total: number
	/** 今日加盟商数量 */
	today_franchisee: number
	/** 昨日加盟商数量 */
	yesterday_franchisee: number
	/** 当月加盟商数量 */
	month_franchisee: number
	/** 区域门店数据 */
	area_data: AreaData[]
	/** 会员等级概况 */
	member_data: MemberData[]
	/** 会员总数 */
	member_count: number
	/** 订单总数 */
	order_count: number
	/** 今日订单数 */
	today_order: number
	/** 昨日订单数 */
	yesterday_order: number
	/** 当月订单数 */
	month_order: number
	/** 消费总金额 */
	total_order_price: string
	/** 设备总数 */
	device_count: number
	/** 今日使用次数 */
	today_use_count: number
	/** 复购产品概况 */
	order_data: OrderData[]
	/** 热门门店设备数据 */
	device_store_data: DeviceStoreData[]
}

/**
 * API 响应结构
 */
export interface ApiResponse<T = any> {
	/** 状态码 */
	code: number
	/** 响应数据 */
	data: T
	/** 错误信息（可选） */
	message?: string
}

/**
 * 业务数据看板 API 响应
 */
export type DashboardApiResponse = ApiResponse<DashboardData>
