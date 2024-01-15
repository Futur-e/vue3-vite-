// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/components/Home.vue";



const routes = [
	{
		path: '/',
		redirect: "/home",
		meta: '首页'
	},
	/*{
		path: '/login',
		component: Login,
		meta: '登录'
	},*/
	{
		path: '/home',
		component: Home,
		hidden: true,
		/*children: [
			{
				path: '/home/page',
				hidden: true,
				redirect: "/home/page/page1",
				component: Layout,
				children: [
					{
						path: '/home/page/user',
						component: UserLayout
					},
					{
						path: '/home/page/page1',
						component: () => import('../page/Home/Page1/index.vue'),
						meta: { title: '单项技能' }
					},
					{
						path: '/home/page/page1/:id',
						component: () => import('../page/Home/Page1/index2.vue'),
						meta: { title: '单项技能' }
					},
					{
						path: '/home/page/page1/successorfaile/:show',
						component: () => import('../page/Home/Page1/SuccessOrFaile.vue'),
						meta: { title: '单项技能' }
					},
					{
						path: '/home/page/page1/zhengshu',
						component: () => import('../page/Home/Page1/SendZhengshu.vue'),
						meta: { title: '单项技能' }
					},



					{
						path: '/home/page/page2',
						component: () => import('../page/Home/Page2/index.vue'),
						meta: { title: '综合实训' }
					},
					{
						path: '/home/page/page2/:id',
						component: () => import('../page/Home/Page2/index1.vue'),
						meta: { title: '综合实训' }
					},
					{
						path: '/home/page/page2/phase/:id',
						component: () => import('../page/Home/Page2/index2.vue'),
						meta: { title: '综合实训' }
					},
					{
						path: '/home/page/page3',
						component: () => import('../page/Home/Page3/index.vue'),
						meta: { title: '案例实训' }
					},
					{
						path: '/home/page/page3/:id',
						component: () => import('../page/Home/Page3/index3.vue'),
						meta: { title: '案例实训' }
					},


					{
						path: '/home/page/page4',
						component: () => import('../page/Home/Page4/index.vue'),
						meta: { title: '谈判英语' }
					},
					{
						path: '/home/page/page4/:id',
						component: () => import('../page/Home/Page4/index1.vue'),
						meta: { title: '谈判英语' }
					},


					{
						path: '/home/page/page5',
						component: () => import('../page/Home/Page5/index.vue'),
						meta: { title: '拓展资源' }
					},
					{
						path: '/home/page/page5/:id',
						component: () => import('../page/Home/Page5/index1.vue'),
						meta: { title: '拓展资源' }
					},

					{
						path: '/home/page/page6',
						component: () => import('../page/Home/Page6/index.vue'),
						meta: { title: '考试测评' }
					},
					{
						path: '/home/page/page6/:paperId/:answerStatus',
						component: () => import('../page/Home/Page6/index2.vue'),
						meta: { title: '考试测评' }
					},

					{
						path: '/home/page/test',
						component: () => import('../page/Home/test/123.vue'),
						meta: { title: '综合实训' }
					},
					{
						path: '/home/page/test1',
						component: () => import('../page/Home/test/index1.vue'),
						meta: { title: '综合实训' }
					},
				]

			}
		]*/
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

/*router.beforeEach((to, from, next) => {
	document.title = to.meta.title === undefined ? '国际商务谈判实训系统' : to.meta.title
	next()
})*/

export default router;
