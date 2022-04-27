import EmberRouter from "@ember/routing/router";
import config from "ember-quickstart/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("scientists");
  this.route("programmers");
  this.route("not-found", { path: "/*path" });
});
