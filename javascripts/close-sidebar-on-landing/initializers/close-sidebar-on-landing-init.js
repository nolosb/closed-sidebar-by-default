import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "close-sidebar-on-landing",

  initialize(container) {
    const router = container.lookup("service:router");
    const site = container.lookup('site:main');
    const applicationController = container.lookup("controller:application");

    if (site.mobileView) {
      return
    }
    else {
      withPluginApi("0.8.24", (api) => {
        applicationController.set("showSidebar", false);
        api.onPageChange((url) => {
          //console.log(router.currentRouteName);
          if (router.currentRoute.name === `${settings.landing_route}`) {
            applicationController.set("showSidebar", false);
          }
          else {
            applicationController.set("showSidebar", true);
          }
        });
      });
    }
  },
};
