const productcapacity = () =>import('@/pages/productcapacity/ProductCapacity')
const version = () => import('@/pages/version/Version')
const changerecord = () => import('@/pages/changerecord/ChangeRecord')
const alarm = () => import('@/pages/alarm/Alarm')
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
        meta:{
            title:'产能监控',
            x:0,
            y:0
        }
    },
    {
        path:'/version',
        name:'version',
        component:version,
        meta:{
            title:"软件版本",
            x:0,
            y:0
        }
    },
    {
        path:'/changerecord',
        name:'changerecord',
        component:changerecord,
        meta:{
            title:"线体列表",
            x:0,
            y:0
        }
    },
    {
        path:'/alarm',
        name:'alarm',
        component:alarm,
        meta:{
            title:"报警监控",
            x:0,
            y:0
        }
    },
    {
        path:'/recorddetail/:id',
        name:'RecordDetail',
        component:recorddetail,
        meta:{
            title:"变更详情",
            x:0,
            y:0
        }
    }
]
export default routes