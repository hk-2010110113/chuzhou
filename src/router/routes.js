const productcapacity = () =>import('@/pages/productcapacity/ProductCapacity')
const version = () => import('@/pages/version/Version')
const changerecord = () => import('@/pages/changerecord/ChangeRecord')
const alert = () => import('@/pages/alert/Alert')
const recorddetail = () =>import('@/pages/changerecord/components/RecordDetail')
const routes = [
    //产能监控，主页
    {
        path:'/',
        redirect:'/productcapacity',
        meta:'产能监控'
    },
    {
        path:'/productcapacity',
        name:'productcapacity',
        component:productcapacity,
        meta:'产能监控'
    },
    {
        path:'/version',
        name:'version',
        component:version,
        meta:'软件版本'
    },
    {
        path:'/changerecord',
        name:'changerecord',
        component:changerecord,
        meta:'线体列表'
    },
    {
        path:'/alert',
        name:'alert',
        component:alert,
        meta:'报警监控'
    },
    {
        path:'/recorddetail/:id',
        name:'RecordDetail',
        component:recorddetail,
        meta:'变更详情'
    }
]
export default routes