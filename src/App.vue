<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

if (process.env.NODE_ENV === 'development') {
  const ctx =
    '{"Tenant":{"ContentDatabaseId":1,"Code":"cloudschools","Name":"常青云国际双语幼儿园北苑校园1","BrandCode":"cloudschools","District":"广东省/中山市","DistrictCode":"442000","Address":"铁建广场 C座1607","AdminName":"赵江山1","AdminMobile":"13693119418","Type":1,"GroupId":1,"IsDisabled":false,"ImageId":85610,"ImageId2":86248,"Email":"zhao.jiangshan@cloudschools.cn","CountryCode":"86","PostCode":"100010","Timezone":8,"DateFormat":"yyyy-MM-dd","TimeFormat":1,"GPS_Baidu":"116.447861,40.047013","Currency":1,"Abbr":"北苑园","Expired":"2021-04-08T00:00:00+08:00","Id":4,"Created":"2016-01-26T10:08:11+08:00","Modified":"2020-08-25T18:33:36+08:00"},"Member":{"Mobile":"17710222617","DisplayName":"黄鑫德","Email":null,"JobTitle":null,"LoginName":"","Gender":1,"Status":1,"CardNo":"","OrgId":0,"PhotoFileId":86099,"IsDeleted":false,"PhotoImageUrl":"http://api.apps.cloudschools.cn/api/pubfile/4/avatar/86099","TenantId":4,"Id":1263,"Created":"2019-12-26T17:14:03+08:00","Modified":"2020-09-04T14:10:57+08:00"},"WxUser":{"UserId":3768,"IsSubscribed":true,"Unsubscribed":"2019-09-11T11:54:05+08:00","Subscribed":"2018-08-21T18:31:54+08:00","AppId":"wx6c1fc903611e3da2","OpenId":"oOMwnsxw7hMS1lt9SP-YD7WpauEc","UnionId":null,"NickName":"酸菜","Gender":1,"AvatarUrl":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKmVah0XkicZoP87LBLmlyCjvvzsl1KgyrhNDiarUCtUBaw04rBJ5yq21kc15IZ1llEU2wr5t0PTxqg/132","Id":3308,"Created":"2019-04-12T14:10:57+08:00","Modified":"2020-09-17T18:41:56+08:00"},"OpenApi":"http://api.apps.cloudschools.cn/api"}'

  const token =
    'fcZoeTXf4hvUUlUHMMYgLqtqmFIKqMtaRYzE3jsdfno69nIbpTD1fQtzvNRs-ikgbmEKaZ9n_lC_pFMcxxRx21S4giIM2zoy72eKewTPv4WS9u0eRn93xpvRAgyldizwtvy60te2fUld-BERDVosrpxLGGubyHnWqNB6g_Lm42iRrsmJ4N9p8sUWyINXczKx4TM2ZY-Kw-JnYcgbVUNuMDykqAmyyBg9LhIgx5_dyKGRX1ZaiU3eKiHjlRAYIPnusYa3b9SHubyfWhsqZDAQY-CMPzktw66_mCAgWzt-644='

  if (!sessionStorage.getItem('ctx')) {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('ctx', ctx)
  }

  if (window.location.href.indexOf('?') < 0) {
    window.location.href = '/index.html?timestamp=' + new Date().getTime()
  }
}
if (!sessionStorage.getItem('token')) {
  window.location.href = '/WPOAuth2/SchoolHr-Wp?appCode=CloudSchools'
}

import store from '@/store'
store.dispatch('toggleToken', sessionStorage.getItem('token'))
store.dispatch('setCtx', JSON.parse(sessionStorage.getItem('ctx')))
</script>
<style lang="scss"></style>
