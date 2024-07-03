
export function manageMenu() {
  const menus = [
    {
      icon: '/icons/play.webp',
      name: 'เกมทั้งหมด',
      link:  '/games',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/user.png',
      name: 'ข้อมูลส่วนตัว',
      link: '/profile',
      external: false,
      isShow: true,
    },
  ]

  if (!isNotCheckin) {
    menus.push({
      icon: '/icons/schedule.png',
      name: 'เช็คอิน',
      link: '/checkin',
      external: false,
      isShow: true,
    })
  }

  menus.push(
    {
      icon: '/icons/fortune-wheel.png',
      name: 'กงล้อนำโชค',
      link: '/lucky/spin',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/red-envelope.png',
      name: 'เปิดอั่งเปา',
      link: '/lucky/red-envelope',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/auto-deposit.webp',
      name: 'เติมเงินอัตโนมัติ',
      link: '/deposit',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/decimal-deposit.webp',
      name: 'เติมเงินทศนิยม',
      link: '/deposit/decimal',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/bitcoin.png',
      name: 'เติมเงิน Crypto',
      link: '/deposit/crypto',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/withdraw.webp',
      name: 'ถอนเงิน',
      link: '/withdraw',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/free-credit.webp',
      name: 'รับเครดิตฟรี',
      link: '/credit',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/promotion.webp',
      name: 'โปรโมชัน',
      link: '/promotion',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/profit.png',
      name: 'โบนัสเพื่อนฝาก',
      link: '/bonus',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/affiliate.webp',
      name: 'ลิ้งรับทรัพย์',
      link: '/affiliate',
      external: false,
      isShow: true,
    }
  )

  const menuSeccond = [
    {
      icon: '/icons/history.webp',
      name: 'ประวัติรายการ',
      link: '/history',
      external: false,
      isShow: true,
    },
    {
      icon: '/icons/customer-service.png',
      name: 'ติดต่อ',
      link: '/contract',
      external: true,
      isShow: true,
    },
    {
      icon: '/icons/report.webp',
      name: 'ร้องเรียน',
      link: '/report',
      external: false,
      isShow: true,
    },
  ]

  let dataList = menus.filter((el) => {
    return el.isShow == 'true' || el.isShow == true
  })

  const loyalty = {
    icon: '/icons/credit.webp',
    name: 'รับเงินคืน',
    link: '/loyalty',
    external: false,
    isShow: true,
  }

  const ranking = {
    icon: '/icons/ranking.webp',
    name: 'VIP Club',
    link: '/rank',
    external: false,
    isShow: true,
  }

  dataList.push(loyalty)
  if (process.env.MENU_VIP_CLUB == 'true') {
    dataList.push(ranking)
  }

  dataList = [...dataList, ...menuSeccond]

  if (process.env.LINE_LOGIN === 'true') {
    dataList.push({
      icon: '/icons/LINE.png',
      name: 'เชื่อมต่อ LINE',
      link: '/line-connect',
      external: false,
      isShow: true,
    })
  }
  if (process.env.MENU_REVIEW == 'true') {
    dataList.push({
      icon: '/icons/star.png',
      name: 'รีวิว',
      link: '/review',
      external: false,
      isShow: true,
    })
  }

  dataList.push({
    icon: '/icons/logout.png',
    name: 'ออกจากระบบ',
    link: '/logout',
    external: false,
    isShow: true,
  })

  // if(process.env.WEBSITE_NAME == 'meslot168'){
  //   dataList.push({
  //     icon: '/icons/world-cup.png',
  //     name: 'ทายผลบอลโลก',
  //     link: '/fifa-worldcup',
  //     external: false,
  //     isShow: true,
  //   })
  // }
  return dataList
}

