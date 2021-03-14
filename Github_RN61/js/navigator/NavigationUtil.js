export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param params 要传递的参数
   * @param page 要跳转的页面名
   */
  static goPage(params, page) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('navigation can be not null');
    }

    navigation.navigate(page, {...params});
  }

  /**
   * 重置到首页
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}
