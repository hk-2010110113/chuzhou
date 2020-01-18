const productcapacity = () =>import('@/pages/productcapacity/ProductCapacity')
const version = () => import('@/pages/version/Version')
const changerecord = () => import('@/pages/changerecord/ChangeRecord')
const alarm = () => import('@/pages/alarm/Alarm')
const recorddetail = () =>import('@/pages/changerecord/components/recorddetail')
const login = () => import('@/pages/login/login')
const me = () => import('@/pages/me/me')
const routes = [
    //产能监控，主页
    {
        path:'/',
        redirect:'/login',
        meta:{
            ifneedsignIn:false
        }
    },
    {
        path:'/productcapacity',
        name:'productcapacity',
        component:productcapacity,
        meta:{
            title:'产能监控',
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/version',
        name:'version',
        component:version,
        meta:{
            title:"软件版本",
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/changerecord',
        name:'changerecord',
        component:changerecord,
        meta:{
            title:"线体列表",
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/alarm',
        name:'alarm',
        component:alarm,
        meta:{
            title:"报警监控",
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/recorddetail/:id',
        name:'RecordDetail',
        component:recorddetail,
        meta:{
            title:"变更详情",
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/me',
        name:'Me',
        component:me,
        meta:{
            title:'我的',
            x:0,
            y:0,
            ifneedsignIn:true
        }
    },
    {
        path:'/login',
        name:'Login',
        component:login,
        meta:{
            ifneedsignIn:false
        }
    }
]
export default routes