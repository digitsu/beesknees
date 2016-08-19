import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Bees Knees",
  name: "bees",
  icon: "fa fa-vine",
  autoEnable: true,
  layout: [{
      layout: "coreLayoutBeesknees",
      workflow: "coreProductWorkflow",
      collection: "Products",
      theme: "default",
      enabled: true,
      structure: {
        template: "products",
        layoutHeader: "layoutHeader",
        layoutFooter: "layoutFooter",
        notFound: "productNotFound",
        dashboardHeader: "",
        dashboardControls: "dashboardControls",
        dashboardHeaderControls: "",
        adminControlsFooter: "adminControlsFooter"
      }
    }]
});