import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "closed-sidebar-by-default",

  initialize() {
    withPluginApi("0.8", (api) => {
      const applicationController = api.container.lookup("controller:application");
       applicationController.set("showSidebar", false);
      api.onPageChange((url, title) => {
        const router = api.container.lookup('service:router');
        //console.log(router.currentRouteName);

        if (router.currentRoute.name === 'discovery.top') {
         applicationController.set("showSidebar", false);
       }
        else {
         applicationController.set("showSidebar", true);
       }
      });

    });
  },
};
