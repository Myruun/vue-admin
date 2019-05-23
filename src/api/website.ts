import Api from '@/utils/request'

export const getData = () => {
  return Api.getData()
}

// export const getcategory = da => {
//   console.log('hello')
//   Api.HttpRequest('')
// http://hn2.api.okayapi.com/?&service=App.Table.FreeQuery&model_name=okayapi_article&page=1
// &perpage=10&where=[["id",">",0]]&app_key=591EDA6AB41AD46668F1D94A0EBDDC3B
//
//   return Api.getData()
// }
