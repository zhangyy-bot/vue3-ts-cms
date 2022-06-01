import zyyRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  // 记得return
  return zyyRequest.post({
    url: url,
    data: queryInfo
  })
}

// /users/id
export function deletePageData(url: string) {
  return zyyRequest.delete({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return zyyRequest.post({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return zyyRequest.patch({
    url: url,
    data: editData
  })
}
