/* jshint esversion: 6 */
// 资产管理-车辆、司机管理
let cars = () =>
  import ('@/pages/tags/asset/cars/index');
let driver = () =>
  import ('@/pages/tags/asset/driver/index');
// 基础数据-SKU
let SKU = () =>
  import ('@/pages/tags/basic/SKU/index');
// 企业管理-部门管理
let department = () =>
  import ('@/pages/tags/company/department/index');
// 企业管理-公司抬头
let companyName = () =>
  import ('@/pages/tags/company/name/index');

let information = () =>
  import ('@/pages/tags/company/information/index');
// 企业管理-角色管理
let role = () =>
  import ('@/pages/tags/company/role/index');
// 企业管理-员工管理
let staff = () =>
  import ('@/pages/tags/company/staff/index');


// 客户管理-客户管理
let customer = () =>
  import ('@/pages/tags/customer/customer/index');

// 客户管理-客户管理-详情
let customerDetail = () =>
  import ('@/pages/tags/customer/customer/detail/index');
// 客户管理-供应商管理
let supplier = () =>
  import ('@/pages/tags/customer/supplier/index');
let supplierDetail = () =>
  import ('@/pages/tags/customer/supplier/detail/index');

// 进销存管理-采购管理
let purchase = () =>
  import ('@/pages/tags/ERP/purchase/index');

// 进销存管理-采购单详情页
let purchaseDetail = () =>
  import('@/pages/tags/ERP/purchase/detail/index')

// 进销存管理-新增采购单页
let purchaseAdd = () =>
  import('@/pages/tags/ERP/purchase/append/index')

// 进销存管理-销售管理
let sale = () =>
  import ('@/pages/tags/ERP/sale/index');
// 进销存管理-库存管理
let saleWarehouse = () =>
  import ('@/pages/tags/ERP/warehouse/sale/index');

let purchaseWarehouse = () =>
  import ('@/pages/tags/ERP/warehouse/purchase/index');


// 物流管理-待调度
let scheduling = () =>
  import ('@/pages/tags/logistics/scheduling/index');
// 物流管理-物流跟踪
let tracking = () =>

  import ('@/pages/tags/logistics/tracking/index');
// 结算管理-结算管理内容
let settlementIndex = () =>
  import ('@/pages/tags/settlement/index');





let menus = [{
    name: '进销存管理',
    content: {
      // type:'',// 通知菜单跳转时需要的页面类型
      component: '',
      data: {}
    }
  },
  {
    name: '销售管理',
    content: {
      component: 'sale',
      data: {}
    }
  },
  {
    name: '采购管理',
    content: {
      component: 'purchase',
      data: {}
    }
  },
  {
    name: '新增采购单',
    content: {
      component: 'purchaseAdd',
      data:{}
    }
  },
  {
    name: '采购单详情',
    content: {
      component: 'purchaseDetail',
      data: {}
    }
  },
  {
    name: '库存管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '销售库存管理',
    content: {
      component: 'saleWarehouse',
      data: {}
    }
  },
  {
    name: '采购库存管理',
    content: {
      component: 'purchaseWarehouse',
      data: {}
    }

  },
  {
    name: '采销客户管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '客户管理',
    content: {
      component: 'customer',
      data: {}
    }
  },
  {
    name: '客户管理-详情',
    content: {
      component: 'customerDetail',
      data: {}
    }
  },
  {
    name: '供应商管理',
    content: {
      component: 'supplier',
      data: {}
    }
  },
  {
    name: '供应商管理-详情',
    content: {
      component: 'supplierDetail',
      data: {}
    }
  },
  {
    name: '物流管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '物流调度',
    content: {
      component: 'scheduling',
      data: {}
    }
  },
  {
    name: '物流跟踪',
    content: {
      component: 'tracking',
      data: {}
    }
  },
  {
    name: '资产管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '车辆管理',
    content: {
      component: 'cars',
      data: {}
    }
  },
  {
    name: '司机管理',
    content: {
      component: 'driver',
      data: {}
    }
  },
  {
    name: '结算管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '结算管理内容',
    content: {
      component: 'settlementIndex',
      data: {}
    }
  },
  {
    name: '基础数据',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: 'SKU',
    content: {
      component: 'SKU',
      data: {}
    }
  },
  {
    name: '企业管理',
    content: {
      component: '',
      data: {}
    }
  },
  {
    name: '公司管理',
    content: {
      component: 'information',
      data: {}
    }
  },
  {
    name: '员工管理',
    content: {
      component: 'staff',
      data: {}
    }
  },
  {
    name: '公司户头管理',
    content: {
      component: 'companyName',
      data: {}
    }
  },
  {
    name: '部门管理',
    content: {
      component: 'department',
      data: {}
    }
  },
  {
    name: '角色管理',
    content: {
      component: 'role',
      data: {}
    }
  },
];

export let map = new Map();
menus.forEach(i => {
  map.set(i.name, i.content);
});

export let tags = {
  cars,
  driver,
  SKU,
  department,
  information,
  role,
  staff,
  companyName,
  customer,
  customerDetail,
  supplier,
  supplierDetail,
  purchase,
  sale,
  saleWarehouse,
  purchaseWarehouse,
  scheduling,
  tracking,
  settlementIndex,
  purchaseDetail,
  purchaseAdd
};
