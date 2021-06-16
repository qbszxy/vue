const data = [
  {
    productId: '123456',
    list: [
      { saleId: '123456-1', saleName: 'NIKE耐克鞋男官网旗舰正品男鞋 21新款夏季透气休闲跑步鞋运动鞋' },
      { saleId: '123456-2', saleName: 'NIKE耐克裤子男夏季速干薄款官网旗舰休闲梭织长裤直筒运动裤男' }
    ]
  },
  {
    productId: '987654',
    list: [
      { saleId: '987654-3', saleName: '李宁跑步鞋男鞋2021新款鞋子休闲网鞋跑鞋夏季透气网面男士运动鞋' },
      { saleId: '987654-4', saleName: '李宁篮球短裤男2021夏季新款BADFIVE美式大码透气裤子冰丝运动裤' }
    ]
  }
]

const getSaleList = function (productId) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].productId === productId) {
        resolve({ code: 0, data: data[i].list, message: '获取成功' })
        break
      }
    }
    resolve({ code: 1, data: null, message: '产品不存在,获取失败!' })
  })
}

export default getSaleList
