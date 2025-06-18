import ky from 'ky'

const url =
	'https://meixi.nuws.cn/addons/yun_shop/api.php?route=plugin.angel-pen.open.visualization.index&i=1&certificate=LWNLpUdmCFoJQ5esmpGERS8bkLU2e3fm'

const httpClient = ky.create({ retry: 0 })

const api = () =>
	httpClient(url)
		.json<DashboardApiResponse>()
		.then((json) => json.data)

export default api
