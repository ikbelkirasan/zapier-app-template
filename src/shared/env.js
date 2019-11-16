const { version } = require("../../package.json");

function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
    : baseURL;
}

const API_URL = "";

module.exports = {
  API_URL,
  APP_VERSION: version,
  api(uri) {
    return combineURLs(API_URL, uri);
  },
};
