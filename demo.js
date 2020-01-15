var axios = require('axios')

var getList = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: '/abc/login',
            data: {
                userName: 'Lan',
                password: '123'
            }
        })
            .then(function (response) {
                console.log(response)
                
                resolve(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        // var i = 12;
        // setTimeout(() => {
        //     i++;
        //     resolve(i)
        // }, 1000);
    })
}

var getItem = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a++
            resolve(a)
        }, 1000);
    })
}

getList().then(getItem).then((data) => {
    console.log(data)
})



// promise链式调用
function china() {
    var p = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('中国  国家')
            resolve('教育大省份')
        }, 2000)
    })
    return p;
}


function jiangshu(data) {
    var p = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('江苏 省份')
            resolve('地级市');
        }, 1000)
    })
    return p;
}

china().then(jiangshu).then(function (data) {
    console.log(data)
})